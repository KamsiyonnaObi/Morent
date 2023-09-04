import CarModel from "@/models/Car";
import { NextResponse } from "next/server";
import mongooseConnect from "@/utils/mongooseConnect";

export async function GET(request: Request) {
  try {
    await mongooseConnect();
    const { searchParams } = new URL(request.url);
    const carTypes = searchParams.get("type")?.split(",");
    const Capacity = searchParams.get("capacity")?.split(",");
    const Location = searchParams.get("location");
    const Price = searchParams.get("price")
      ? Number(searchParams.get("price"))
      : undefined;
    // const DropOff = searchParams.get("dropOff");
    const PickUp = searchParams.get("pickUp");
    const Search = searchParams.get("search");
    const filteredCars = await CarModel.find({
      ...(Location && { location: { $regex: Location, $options: "i" } }),
      ...(carTypes && { cartype: carTypes }),
      ...(Capacity && { capacity: Capacity }),
      ...(Price && { rentprice: { $lte: Price } }),
      ...(PickUp && { dropOff: { $lte: PickUp } }),
      ...(Search && { cartitle: { $regex: Search, $options: "i" } }),
    }).exec();

    return NextResponse.json(filteredCars);
  } catch (error) {
    return NextResponse.json({ message: "Error fetching from Database" });
  }
}
