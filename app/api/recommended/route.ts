import { NextResponse } from "next/server";
import CarModel from "@/models/Car";
import mongooseConnect from "@/utils/mongooseConnect";

export async function GET(request: Request) {
  await mongooseConnect();
  const likedCars = await CarModel.find().sort({ likeCount: -1 });
  return NextResponse.json(likedCars);
}
