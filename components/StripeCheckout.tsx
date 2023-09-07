"use client";

import { loadStripe } from "@stripe/stripe-js";
import React from "react";

type Props = {};

const StripeCheckout = (props: Props) => {
  const carId = "64f357dbde07fef44ded0d0f";
  const someButtonClick = async () => {
    try {
      const stripe = await loadStripe(
        process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY || ""
      );
      const response = await fetch("/api/stripe/checkout_session", {
        method: "POST",
        headers: {
          "Content-Type": "application/json", // Set the appropriate content type
        },
        body: JSON.stringify({ carId }), // Convert carId to JSON and send it in the request body
      });

      const session = await response.json();
      if (response.ok) {
        const result = await stripe?.redirectToCheckout({
          sessionId: session.id,
        });

        if (result?.error) {
          console.error("Stripe redirect error", result.error);
        } else {
          console.error("Fetch Error", session.message);
        }
      }
    } catch (error) {
      console.error("Stripe Checkout Error:", error);
    }
  };
  return (
    <div>
      <button
        className="text-[.875rem] font-semibold leading-normal"
        onClick={someButtonClick}
      >
        Connect To Stripe
      </button>
    </div>
  );
};

export default StripeCheckout;
