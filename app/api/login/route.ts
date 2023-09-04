import dbConnect from "@/utils/mongooseConnect";
import UserModel from "@/models/User";
import { IUser } from "@/types/mongoose";
import jwt from "jsonwebtoken";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const formData = await request.formData();

  const email = formData.get("email");
  const password = formData.get("password");
  try {
    // connect to DB
    await dbConnect();

    // check if user with the same email exists
    const existingUser = (await UserModel.findOne({ email })) as IUser;
    const isPasswordValid = await existingUser?.checkPassword(
      password as string
    );

    // Check Username and Password
    if (!existingUser || !isPasswordValid) {
      return NextResponse.json(
        { message: "Email or Password is invalid" },
        { status: 400 }
      );
    }

    // create a JWT token
    const token = jwt.sign(
      { userId: existingUser._id },
      process.env.JWT_SECRET || ""
    );

    // store token in cookies
    cookies().set("token", token);

    return NextResponse.json(
      { message: "Successfully logged in" },
      {
        status: 200,
      }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Something Went Wrong" },
      { status: 500 }
    );
  }
}
