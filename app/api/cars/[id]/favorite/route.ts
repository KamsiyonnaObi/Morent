import { cookies } from "next/headers";
import dbConnect from "@/utils/mongooseConnect";
import jwt from "jsonwebtoken";
import UserModel from "@/models/User";
import CarModel from "@/models/Car";
import { NextResponse } from "next/server";

interface TokenValue {
  userId: string;
}

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  await dbConnect();

  const token = cookies().get("token");

  if (!token) {
    return NextResponse.json(
      { message: "unauthorized" },
      {
        status: 401,
      }
    );
  }

  const tokenValue: TokenValue = jwt.verify(
    token?.value,
    process.env.JWT_SECRET || ""
  ) as TokenValue;
  const userId = tokenValue.userId;

  const userLike = await UserModel.findOne({
    _id: userId,
    carsFavorite: { $in: [params.id] },
  });

  if (!userLike) {
    const car = await CarModel.findByIdAndUpdate(params.id, {
      $inc: { likeCount: 1 },
    }).exec();

    await UserModel.findByIdAndUpdate(userId, {
      $push: { carsFavorite: car?._id },
    }).exec();
    return NextResponse.json({ message: "success" });
  } else {
    const car = await CarModel.findByIdAndUpdate(params.id, {
      $inc: { likeCount: -1 },
    }).exec();

    await UserModel.findByIdAndUpdate(userId, {
      $pull: { carsFavorite: car?._id },
    }).exec();
    return NextResponse.json({ message: "Failure" });
  }
}
