import jwt from "jsonwebtoken";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import { userToken } from "@/types/component";
import CarModel from "@/models/Car";
import UserModel from "@/models/User";
import dbConnect from "@/utils/mongooseConnect";

export async function GET(request: Request) {
  await dbConnect();
  const token = cookies().get("token");
  // return unauthorized if data is unavailable
  if (!token) {
    return new Response(JSON.stringify({ message: "Unauthorized" }), {
      status: 401,
    });
  }
  // jwt.verify the token with secret key (save userId)
  try {
    const tokenValue = jwt.verify(
      token?.value,
      process.env.JWT_SECRET || ""
    ) as userToken;
    const alreadyRented = await UserModel.findById(tokenValue.userId).populate({
      path: "carsRented",
    });

    return new Response(JSON.stringify(alreadyRented?.carsRented));
  } catch (error) {
    return new Response(JSON.stringify({ message: "Unauthorized" }), {
      status: 401,
    });
  }
}

export async function POST(request: Request) {
  // Get the token from the cookies
  const token = cookies().get("token");

  console.log(token);

  if (!token) {
    return new Response(JSON.stringify({ message: "Unauthorized" }), {
      status: 401,
    });
  }

  const tokenData = jwt.verify(
    token.value,
    process.env.JWT_SECRET || ""
  ) as userToken;

  if (!tokenData) {
    return NextResponse.json({ response: "Unauthorized" });
  }

  try {
    await dbConnect();

    const user = await UserModel.findById(tokenData.userId);

    if (!user) {
      return NextResponse.json({ response: "Unauthorized" });
    }

    const requestBody = await request.json();

    const { carId, dropoffDate } = requestBody;

    const car = await CarModel.findById(carId);
    if (!car) {
      return NextResponse.json({ response: "Car not found" });
    }

    car.dropOff = new Date(dropoffDate);
    car.renter = user.id;

    await car.save();

    await user.updateOne({ $addToSet: { carsRented: car.id } });

    return NextResponse.json({ response: "Car rented successfully" });
  } catch (error) {
    console.error("An error occurred:", error);
    return NextResponse.json({ response: "Error renting the car" });
  }
}
