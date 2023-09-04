import jwt from "jsonwebtoken";
import { cookies } from "next/headers";

import UserModel from "@/models/User";
import mongooseConnect from "@/utils/mongooseConnect";
import { userToken } from "@/types/component";

export async function GET(request: Request) {
  await mongooseConnect();
  const token = cookies().get("token");
  if (!token) {
    return new Response(JSON.stringify({ message: "Unauthorized" }), {
      status: 401,
    });
  }
  const tokenValue = jwt.verify(
    token?.value,
    process.env.JWT_SECRET || ""
  ) as userToken;

  const myRentedCars = await UserModel.findById(tokenValue.userId).populate({
    path: "carsForRent",
  });

  return new Response(JSON.stringify(myRentedCars?.carsForRent));
}
