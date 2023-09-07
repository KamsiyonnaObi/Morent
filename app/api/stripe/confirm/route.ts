import { NextRequest, NextResponse } from "next/server";
import { headers } from "next/headers";
import Stripe from "stripe";

import UserModel from "@/models/User";
import dbConnect from "@/utils/mongooseConnect";

export async function POST(req: NextRequest) {
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || "", {
    typescript: true,
    apiVersion: "2023-08-16",
  });

  const buff = await req.text();
  const sig = headers().get("stripe-signature");
  try {
    stripe.webhooks.constructEvent(
      buff,
      sig!,
      process.env.STRIPE_CONFIRM_SECRET!
    );
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: "Unautorized" });
  }

  const body = JSON.parse(buff);
  const id = body.data.object.id;

  try {
    await dbConnect();
    const user = await UserModel.findOne({
      stripe_id: id,
    });
    if (user) {
      const car = user.stripe_car;
      await user.updateOne({ $addToSet: { carsRented: car } });
      await user.save();
    }
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: "Unautorized" });
  }

  return NextResponse.json({ message: "payment successful" });
}
