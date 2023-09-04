"use client";
import React from "react";
import { useMediaQuery } from "react-responsive";
import StarRating from "./StarRating";
import Image from "next/image";
import Input from "./Input";

import { RentalSummaryProps } from "@/types/component";

const RentalSummary = ({
  title,
  carImage,
  rating,
  review,
  subtotal,
  tax,
}: RentalSummaryProps) => {
  const isMobile = useMediaQuery({ maxWidth: 1024 });

  const totalPrice = subtotal + tax;

  return (
    <article className="flex h-[424px] w-[327px] flex-col rounded-[10px] bg-white-00 md:h-[560px] md:w-[492px]">
      <section className="flex flex-row justify-between">
        <div className="mx-4 mt-6 items-center md:ml-6 md:mt-6">
          <h4 className="text-20 font-bold">Rental Summary</h4>
          <div className="text-12 text-gray-400 md:text-14">
            Prices may change depending on the length of the rental and the
            price of your rental car.
          </div>
        </div>
      </section>
      <section className="flex flex-row ">
        <div className="relative ml-4 h-[80px] w-[116px] rounded-[8px] bg-[url('/Ads4.svg')] bg-cover md:ml-6 md:mt-6 md:h-[108px] md:w-[132px] ">
          <div className="ml-0.5 mt-6 md:ml-1 md:mt-9">
            <Image src={carImage} alt="Koenigsegg" width={116} height={36} />
          </div>
        </div>
        <div className="ml-3 flex flex-col md:ml-4 md:mt-8">
          <h1 className="mt-2 text-20 font-semibold md:mt-3 md:text-32">
            {title}
          </h1>
          <div className="flex flex-col md:flex-row">
            <StarRating rating={rating} />
            <div className="text-12 md:ml-4 md:text-14">
              {review}+ Reviewers
            </div>
          </div>
        </div>
      </section>
      <div className="m-4 md:my-8">
        <hr className="border-t border-gray-300" />
      </div>
      <section>
        <div className=" mx-4 flex flex-row justify-between md:mx-6">
          <h1 className="text-12 font-semibold text-gray-400 md:text-16">
            Subtotal
          </h1>
          <h1 className="text-12 font-semibold md:text-16">
            ${Number(subtotal).toFixed(2)}
          </h1>
        </div>
        <div className="mx-4 my-6 flex flex-row justify-between md:mx-6 md:my-8">
          <h1 className="text-12 font-semibold text-gray-400 md:text-16">
            Tax
          </h1>
          <h1 className="text-12 font-semibold md:text-16">
            ${Number(tax).toFixed(2)}
          </h1>
        </div>
        <div className="relative mx-4 mt-4 md:mx-6 md:mt-8">
          <Input
            type="String"
            placeholder="Apply Promo Code"
            onChange={() => {}}
            width={isMobile ? "295px" : "444px"}
            height={isMobile ? "40px" : "56px"}
            inputColor="bg-white-200 text-12 md:text-14"
          />
          <span className="absolute right-4 top-1/2 -translate-y-1/2 cursor-pointer text-12 md:text-16 ">
            Apply Now
          </span>
        </div>
        <div className="mx-4 mt-4 flex flex-row justify-between md:mx-6 md:mt-8">
          <div>
            <h1 className="text-16 font-semibold md:text-20">
              Total Rental Price
            </h1>
            <h3 className="text-12 text-gray-400 md:text-14">
              Overall price and includes rental discount
            </h3>
          </div>
          <div className="text-20 font-semibold md:text-32">
            ${Number(totalPrice).toFixed(2)}
          </div>
        </div>
      </section>
    </article>
  );
};

export default RentalSummary;
