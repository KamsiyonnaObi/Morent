"use client";
import React from "react";
import { useMediaQuery } from "react-responsive";
import Input from "./Input";

const BillingInfo = () => {
  const isMobile = useMediaQuery({ maxWidth: 1024 });

  return (
    <article className="flex h-[516px] w-[327px] flex-col rounded-[10px] bg-white-00 md:h-[336px] md:w-[852px]">
      <section className="flex flex-row justify-between">
        <div className="ml-4 mt-6 items-center md:ml-6 md:mt-6">
          <h4 className="text-20 font-bold">Billing Info</h4>
          <div className="text-12 text-gray-400 md:text-14">
            Please enter your billing info
          </div>
        </div>
        <div className="mr-6 mt-[52px] justify-between text-14 text-gray-400 md:mt-6">
          Steps 1 of 4
        </div>
      </section>
      <section className="md:flex md:flex-row ">
        <div className="ml-4 mt-3 items-center md:ml-6 md:mt-6">
          <div className="mb-3 text-14 font-semibold md:text-16">Name</div>
          <Input
            type="String"
            placeholder="Your name"
            onChange={() => {}}
            width={isMobile ? "295px" : "386px"}
            height="56px"
            inputColor="bg-white-200"
          />
        </div>
        <div className="ml-4 mt-3 items-center md:ml-6 md:mt-6">
          <div className="mb-3 text-14 font-semibold md:text-16">
            Phone number
          </div>
          <Input
            type="String"
            placeholder="Phone number"
            onChange={() => {}}
            width={isMobile ? "295px" : "386px"}
            height="56px"
            inputColor="bg-white-200"
          />
        </div>
      </section>
      <section className="md:flex md:flex-row ">
        <div className="ml-4 mt-3 items-center md:ml-6 md:mt-6">
          <div className="mb-3 text-14 font-semibold md:text-16">Address</div>
          <Input
            type="String"
            placeholder="Address"
            onChange={() => {}}
            width={isMobile ? "295px" : "386px"}
            height="56px"
            inputColor="bg-white-200"
          />
        </div>
        <div className="ml-4 mt-3 items-center md:ml-6 md:mt-6">
          <div className="mb-3 text-14 font-semibold md:text-16">
            Town / City
          </div>
          <Input
            type="String"
            placeholder="Town or City"
            onChange={() => {}}
            width={isMobile ? "295px" : "386px"}
            height="56px"
            inputColor="bg-white-200"
          />
        </div>
      </section>
    </article>
  );
};

export default BillingInfo;
