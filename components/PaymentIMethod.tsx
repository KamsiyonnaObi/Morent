"use client";
import React from "react";
import { useMediaQuery } from "react-responsive";
import Image from "next/image";

import Input from "./Input";
import OptionSelect from "./OptionSelect";

const PaymentMethod = () => {
  const isMobile = useMediaQuery({ maxWidth: 1024 });

  return (
    <article className="flex h-[732px] w-[327px] flex-col rounded-[10px] bg-white-00 md:h-[596px] md:w-[852px]">
      <section className="flex flex-row justify-between">
        <div className="ml-4 mt-6 items-center md:ml-6 md:mt-6">
          <h4 className="text-20 font-bold">Payment Method</h4>
          <div className="text-12 text-gray-400 md:text-14">
            Please enter your payment method
          </div>
        </div>
        <div className="mr-6 mt-[52px] justify-between text-14 text-gray-400 md:mt-6">
          Steps 3 of 4
        </div>
      </section>
      <section className="ml-4 mt-4 flex h-[484px] w-[295px] flex-col bg-white-200 md:ml-6 md:mt-8 md:h-[308px] md:w-[804px]">
        <div className="mx-4 mt-3 flex flex-row justify-between md:mx-6 md:mt-6">
          <OptionSelect title="Credit Card" />
          <Image src={"Visa.svg"} alt="Logo" width={92} height={20} />
        </div>
        <section className="md:flex md:flex-row">
          <div className="ml-4 mt-3 items-center md:ml-6 md:mt-6">
            <div className="mb-3 text-14 font-semibold md:text-16">
              Card Number
            </div>
            <Input
              type="String"
              placeholder="Card Number"
              onChange={() => {}}
              width={isMobile ? "263px" : "362px"}
              height="56px"
              inputColor="bg-white-00"
            />
          </div>
          <div className="ml-4 mt-3 items-center md:ml-6 md:mt-6">
            <div className="mb-3 text-14 font-semibold md:text-16">
              Expiration Date
            </div>
            <Input
              type="Date"
              placeholder="DD/MM/YY"
              onChange={() => {}}
              width={isMobile ? "263px" : "362px"}
              height="56px"
              inputColor="bg-white-00"
            />
          </div>
        </section>
        <section className=" md:flex md:flex-row">
          <div className="ml-4 mt-3 items-center md:ml-6 md:mt-6">
            <div className="mb-3 text-14 font-semibold md:text-16">
              Card Holder
            </div>
            <Input
              type="String"
              placeholder="Card Holder"
              onChange={() => {}}
              width={isMobile ? "263px" : "362px"}
              height="56px"
              inputColor="bg-white-00"
            />
          </div>
          <div className="ml-4 mt-3 items-center md:ml-6 md:mt-6">
            <div className="mb-3 text-14 font-semibold md:text-16">CVC</div>
            <Input
              type="String"
              placeholder="CVC"
              onChange={() => {}}
              width={isMobile ? "263px" : "362px"}
              height="56px"
              inputColor="bg-white-00"
            />
          </div>
        </section>
      </section>
      <section className="ml-4 mt-4 flex h-[52px] w-[295px] flex-col bg-white-200 md:ml-6 md:mt-6 md:h-[56px] md:w-[804px]">
        <div className="mx-4 mt-3 flex flex-row justify-between md:mx-6 md:mt-4">
          <OptionSelect title="PayPal" />
          <Image src={"PayPal.svg"} alt="Logo" width={92} height={20} />
        </div>
      </section>
      <section className="ml-4 mt-4 flex h-[52px] w-[295px] flex-col bg-white-200 md:ml-6 md:mt-6 md:h-[56px] md:w-[804px]">
        <div className="mx-4 mt-3 flex flex-row justify-between md:mx-6 md:mt-4">
          <OptionSelect title="Bitcoin" />
          <Image src={"Bitcoin.svg"} alt="Logo" width={92} height={20} />
        </div>
      </section>
    </article>
  );
};

export default PaymentMethod;
