import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import jwt from "jsonwebtoken";

import dbConnect from "@/utils/mongooseConnect";
import UserModel from "@/models/User";
import CarModel from "@/models/Car";
import { userToken } from "@/types/component";

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    await dbConnect();
    // get token from cookies

    const token = cookies().get("token");
    // receive carId from request
    const carId = params.id;

    const car = await CarModel.findById(carId);

    if (!token) {
      return NextResponse.json(
        { message: "Unauthorized" },
        {
          status: 401,
        }
      );
    }

    // verify the token (get userId)
    const tokenData = jwt.verify(
      token?.value,
      process.env.JWT_SECRET || ""
    ) as userToken;

    const user = await UserModel.findById(tokenData.userId);
    // $push car to cars rented in user
    if (user) {
      await UserModel.findByIdAndUpdate(user._id, {
        $push: { carsRented: car?._id },
      });
    }

    // $push user to car renter
    if (car) {
      await CarModel.findByIdAndUpdate(car._id, {
        renter: user?._id,
      });
    }
    return NextResponse.json(
      { message: "Car Rented" },
      {
        status: 200,
      }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Unauthorized" },
      {
        status: 401,
      }
    );
  }
}
