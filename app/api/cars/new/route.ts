import jwt from "jsonwebtoken";
import { NextResponse } from "next/server";
import { cookies } from "next/headers";

import CarModel from "@/models/Car";
import dbConnect from "@/utils/mongooseConnect";
import UserModel from "@/models/User";
import { schema } from "@/utils/validations/carValidator";
import { userToken } from "@/types/component";

export async function POST(request: Request) {
  // set data to send to zod
  const formData = await request.formData();
  const carType = formData.get("carType");
  const carTitle = formData.get("carTitle");
  const rentPrice = parseInt(formData.get("rentPrice") as string);
  const capacity = parseInt(formData.get("capacity") as string);
  const transmission = formData.get("transmission");
  const location = formData.get("location");
  const fuelCapacity = parseInt(formData.get("fuelCapacity") as string);
  const description = formData.get("description");
  const image = formData.get("image");

  try {
    schema.parse({
      carType,
      carTitle,
      rentPrice,
      capacity,
      transmission,
      location,
      fuelCapacity,
      description,
      image,
    });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ response: "invalid inputs" });
  }

  const token = cookies().get("token");

  if (!token) {
    return NextResponse.json({ response: "Unauthorized" });
  }
  const tokenData = jwt.verify(
    token?.value,
    process.env.JWT_SECRET || ""
  ) as userToken;

  try {
    // connect to DB
    await dbConnect();

    const carModel = await CarModel.create({
      cartype: carType,
      cartitle: carTitle,
      rentprice: rentPrice,
      capacity,
      transmission,
      location,
      fuelcapacity: fuelCapacity,
      description,
      image,
    });
    const user = await UserModel.findById(tokenData.userId);

    if (user)
      await UserModel.findByIdAndUpdate(user._id, {
        $push: { carsForRent: carModel._id },
      });
    return NextResponse.json({ response: carModel });
  } catch (error) {
    return NextResponse.json({ response: "Database Error" });
  }
}
