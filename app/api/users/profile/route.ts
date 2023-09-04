import jwt from "jsonwebtoken";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

import { userToken } from "@/types/component";
import UserModel from "@/models/User";
import dbConnect from "@/utils/mongooseConnect";

export async function POST(request: Request) {
  // Get the token from the cookies
  const token = cookies().get("token");

  if (!token) {
    return new Response(JSON.stringify({ message: "Unauthorized" }), {
      status: 401,
    });
  }

  // Check if token is valid and get userId
  const tokenData = jwt.verify(
    token.value,
    process.env.JWT_SECRET || ""
  ) as userToken;

  if (!tokenData) {
    return NextResponse.json({ response: "Unauthorized" });
  }

  try {
    await dbConnect();

    // Fetch the user by userId
    const user = await UserModel.findById(tokenData.userId);

    if (!user) {
      return NextResponse.json({ response: "Unauthorized" });
    }

    const requestBody = await request.json();

    if (requestBody.imageType === "avatar") {
      // Update user's profile image URL
      user.profileImage = requestBody.imageURL;
    } else if (requestBody.imageType === "banner") {
      // Update user's banner image URL
      user.bannerImage = requestBody.imageURL;
    } else {
      return NextResponse.json({ response: "Invalid image type" });
    }

    // Save the updated user data
    await user.save();

    return NextResponse.json({ response: "Image updated successfully" });
  } catch (error) {
    console.error("An error occurred:", error);
    return NextResponse.json({ response: "Error updating image" });
  }
}
