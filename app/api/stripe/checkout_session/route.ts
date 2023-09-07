import CarModel from "@/models/Car";
import UserModel from "@/models/User";
import { cookies } from "next/headers";
import { NextResponse, NextRequest } from "next/server";
import Stripe from "stripe";
import jwt from "jsonwebtoken";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || "", {
  typescript: true,
  apiVersion: "2023-08-16",
});

export async function POST(req: NextRequest) {
  const { carId } = await req.json();

  const car = await CarModel.findById(carId).exec();

  if (!car) {
    return NextResponse.json({ message: "Car Not Found" }, { status: 404 });
  }
  const token = cookies().get("token");

  if (!token) {
    return new Response(JSON.stringify({ message: "Unauthorized" }), {
      status: 401,
    });
  }

  const tokenValue = jwt.verify(token?.value, process.env.JWT_SECRET || "") as {
    userId: string;
  };

  if (!tokenValue) {
    return new Response(JSON.stringify({ message: "Unauthorized" }), {
      status: 401,
    });
  }
  const user = await UserModel.findById(tokenValue.userId);

  if (!user) {
    return new Response(JSON.stringify({ message: "Unauthorized" }), {
      status: 401,
    });
  }

  const unitAmount = car.rentprice * 100;
  const dropOff = new Date();
  dropOff.setDate(dropOff.getDate() + 1);
  const pickUp = new Date();

  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],

      line_items: [
        {
          price_data: {
            currency: "usd",
            product_data: {
              name: car.cartitle,
              description: car.description,
              ...(car.image.startsWith("http") && { images: [car.image] }),
            },

            unit_amount: unitAmount,
          },
          quantity: 1, // calculate days to rent
        },
      ],
      mode: "payment",
      success_url: "http://localhost:3000/success", // pages haven't been created yet
      cancel_url: "http://localhost:3000/cancel",
    });

    await user.updateOne({
      $set: {
        stripe_id: session.id.toString(),
        stripe_dropoff: dropOff,
        stripe_pickup: pickUp,
        stripe_car: carId,
      },
    });
    await user.save();
    return NextResponse.json({ id: session.id }, { status: 201 });
  } catch (error: any) {
    return NextResponse.json(error, { status: 400 });
  }
}
