"use client";
import React from "react";
import { useMediaQuery } from "react-responsive";

import Dropdown from "./Dropdown";
import OptionSelect from "./OptionSelect";

const RentalInfo = () => {
  const isMobile = useMediaQuery({ maxWidth: 1024 });

  return (
    <article className="flex h-[818px] w-auto flex-col rounded-[10px] bg-white-00 md:h-[664px]">
      <section className="flex flex-row justify-between">
        <div className="ml-4 mt-6 items-center md:ml-6 md:mt-6">
          <h4 className="text-20 font-bold">Rental Info</h4>
          <div className="text-12 text-gray-400 md:text-14">
            Please select your rental date
          </div>
        </div>
        <div className="mr-6 mt-[52px] justify-between text-14 text-gray-400 md:mt-6">
          Steps 2 of 4
        </div>
      </section>
      <section className="mx-4 mt-6 flex flex-row justify-between md:mx-6 md:mt-7">
        <OptionSelect title="Pick - Up" />
      </section>
      <section className="md:flex md:flex-row ">
        <div className="ml-4 mt-4 items-center md:ml-6 md:mt-6">
          <div className="mb-3 text-14 font-semibold md:text-16">Location</div>
          <Dropdown
            title="Select your city"
            options={[
              { label: "Option 1", value: "option1" },
              { label: "Option 2", value: "option2" },
            ]}
            onChange={() => {}}
            width={isMobile ? "295px" : "386px"}
            height="56px"
          />
        </div>
        <div className="ml-4 mt-4 items-center md:ml-6 md:mt-6">
          <div className="mb-3 text-14 font-semibold md:text-16">Date</div>
          <Dropdown
            title="Select your date"
            options={[
              { label: "Option 1", value: "option1" },
              { label: "Option 2", value: "option2" },
            ]}
            onChange={() => {}}
            width={isMobile ? "295px" : "386px"}
            height="56px"
          />
        </div>
      </section>
      <section className="md:flex md:flex-row ">
        <div className="ml-4 mt-4 items-center md:ml-6 md:mt-6">
          <div className="mb-3 text-14 font-semibold md:text-16">Time</div>
          <Dropdown
            title="Select your time"
            options={[
              { label: "Option 1", value: "option1" },
              { label: "Option 2", value: "option2" },
            ]}
            onChange={() => {}}
            width={isMobile ? "295px" : "386px"}
            height="56px"
          />
        </div>
      </section>
      <section className="mx-4 mt-5 flex flex-row justify-between md:mx-6 md:mt-7">
        <OptionSelect title="Drop - Off" />
      </section>
      <section className="md:flex md:flex-row ">
        <div className="ml-4 mt-4 items-center md:ml-6 md:mt-6">
          <div className="mb-3 text-14 font-semibold md:text-16">Location</div>
          <Dropdown
            title="Select your city"
            options={[
              { label: "Option 1", value: "option1" },
              { label: "Option 2", value: "option2" },
            ]}
            onChange={() => {}}
            width={isMobile ? "295px" : "386px"}
            height="56px"
          />
        </div>
        <div className="ml-4 mt-4 items-center md:ml-6 md:mt-6">
          <div className="mb-3 text-14 font-semibold md:text-16">Date</div>
          <Dropdown
            title="Select your date"
            options={[
              { label: "Option 1", value: "option1" },
              { label: "Option 2", value: "option2" },
            ]}
            onChange={() => {}}
            width={isMobile ? "295px" : "386px"}
            height="56px"
          />
        </div>
      </section>
      <section className="md:flex md:flex-row ">
        <div className="ml-4 mt-4 items-center md:ml-6 md:mt-6">
          <div className="mb-3 text-14 font-semibold md:text-16">Time</div>
          <Dropdown
            title="Select your time"
            options={[
              { label: "Option 1", value: "option1" },
              { label: "Option 2", value: "option2" },
            ]}
            onChange={() => {}}
            width={isMobile ? "295px" : "386px"}
            height="56px"
          />
        </div>
      </section>
    </article>
  );
};

export default RentalInfo;
