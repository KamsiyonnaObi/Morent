"use client";

import React, { useState } from "react";
import { useMediaQuery } from "react-responsive";
import Image from "next/image";
import { ArrowDown2 } from "iconsax-react";
import { toast } from "react-toastify";
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";
import "react-toastify/dist/ReactToastify.css";

import Input from "./Input";
import OptionSelect from "./OptionSelect";
import Button from "./Button";
import { PickupDropoffProps } from "@/types/component";

const PickupDropoff = ({ toggleModal, carId }: PickupDropoffProps) => {
  const isMobile = useMediaQuery({ maxWidth: 1024 });

  const [pickupDate, setPickupDate] = useState<Date | null>(null);
  const [dropoffDate, setDropoffDate] = useState<Date | null>(null);
  const [dropoffTime, setDropoffTime] = useState("");

  const handlePickupDateChange = (date: Date | null) => {
    setPickupDate(date);
  };

  const handleDropoffDateChange = (date: Date | null) => {
    setDropoffDate(date);
  };

  const notify = () => toast("Rented car!");

  const handleRentNow = async () => {
    if (!carId) {
      console.error("Please select a car before renting.");
      return;
    }

    if (!dropoffDate) {
      console.error("Please select a drop-off date.");
      return;
    }
    const [hours, minutes] = dropoffTime.split(":");
    dropoffDate.setHours(Number(hours));
    dropoffDate.setMinutes(Number(minutes));
    try {
      const response = await fetch("/api/rented", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          carId,
          dropoffDate,
        }),
      });

      if (response.ok) {
        notify();
      } else {
        console.error("Failed to rent the car");
      }
    } catch (error) {
      console.error("An error occurred:", error);
    }
  };

  return (
    <article className="flex h-[509px] w-[359px] flex-col rounded-[10px] bg-white-00 dark:bg-gray-850 md:h-[606px] md:w-[500px]">
      <section className="ml-4 mt-[40px] md:ml-[50px] md:mt-[50px]">
        <div className="flex flex-row justify-between">
          <h4 className="text-18 font-bold md:text-20">
            Add Pickup & Drop-Off Info
          </h4>
          <h4
            className="mr-8 cursor-pointer text-18 md:mr-16 md:text-24"
            onClick={() => toggleModal(false)}
          >
            x
          </h4>
        </div>
        <div className="text-14 text-gray-400 ">Please enter your info</div>
      </section>
      <section className="ml-4 mt-[40px] md:ml-[50px] md:mt-[50px]">
        <div className="mb-3 text-14 md:text-16">
          <OptionSelect title="Pickup Location" />
        </div>
        <div className="text-10 md:text-14">
          <Input
            type="String"
            placeholder="Location Address"
            onChange={() => {}}
            width={isMobile ? "327px" : "400px"}
            height={isMobile ? "46px" : "56px"}
            inputColor="bg-white-200 dark:bg-gray-800"
          />
        </div>
      </section>
      <section className="ml-4 mt-6 flex flex-row md:ml-[50px] md:mt-[50px] ">
        <div className="flex flex-col">
          <div className="mb-3 flex flex-row">
            <Image
              src={"/Calendar.svg"}
              alt="Calendar"
              width={isMobile ? 14 : 16}
              height={isMobile ? 14 : 16}
            />
            <div className="ml-2 text-14 font-semibold md:text-16">
              Pick-Up Date
            </div>
          </div>
          <div className="relative text-10 md:text-14">
            <DatePicker
              selected={pickupDate}
              onChange={handlePickupDateChange}
              dateFormat="MM/dd/yyyy"
              placeholderText="Select a date"
              className={`h-[42px] w-[155px] rounded-[10px] bg-white-200 px-4 py-1 dark:bg-gray-800 md:h-[56px] md:w-[195px]`}
            />
            {/* <ArrowDown2 className="absolute right-4 top-[50%] h-[12px] w-[12px] -translate-y-1/2 md:h-[14px] md:w-[14px]" /> */}
          </div>
        </div>
        <div className="ml-2 flex flex-col">
          <div className="mb-3 flex flex-row">
            <Image
              src={"/Calendar.svg"}
              alt="Calendar"
              width={isMobile ? 14 : 16}
              height={isMobile ? 14 : 16}
            />
            <div className="ml-2 text-14 font-semibold md:text-16">
              Pick-Up Time
            </div>
          </div>
          <div className="relative text-10 md:text-14">
            <Input
              type="Time"
              placeholder="Select your time"
              onChange={() => {}}
              width={isMobile ? "155px" : "195px"}
              height={isMobile ? "42px" : "56px"}
              inputColor="bg-white-200 dark:bg-gray-800 text-gray-400"
            />
          </div>
        </div>
      </section>
      <section className="ml-4 mt-5 flex flex-row md:ml-[50px] md:mt-6 ">
        <div className="flex flex-col">
          <div className="mb-3 flex flex-row">
            <Image
              src={"/Calendar.svg"}
              alt="Calendar"
              width={isMobile ? 14 : 16}
              height={isMobile ? 14 : 16}
            />
            <div className="ml-2 text-14 font-semibold md:text-16">
              Drop-off Date
            </div>
          </div>
          <div className="relative text-10 md:text-14">
            <DatePicker
              selected={dropoffDate}
              onChange={handleDropoffDateChange}
              dateFormat="MM/dd/yyyy"
              placeholderText="Select a date"
              className={`h-[42px] w-[155px] rounded-[10px] bg-white-200 px-4 py-1 dark:bg-gray-800 md:h-[56px] md:w-[195px]`}
            />
            <ArrowDown2 className="absolute right-4 top-[50%] h-[12px] w-[12px] -translate-y-1/2 md:h-[14px] md:w-[14px]" />
          </div>
        </div>
        <div className="ml-2 flex flex-col">
          <div className="mb-3 flex flex-row">
            <Image
              src={"/Calendar.svg"}
              alt="Calendar"
              width={isMobile ? 14 : 16}
              height={isMobile ? 14 : 16}
            />
            <div className=" ml-2 text-14 font-semibold md:text-16">
              Drop-off Time
            </div>
          </div>
          <div className="relative text-10 md:text-14">
            <Input
              type="Time"
              placeholder="Select your time"
              onChange={(event) => setDropoffTime(event.target.value)}
              width={isMobile ? "155px" : "195px"}
              height={isMobile ? "42px" : "56px"}
              inputColor="bg-white-200 dark:bg-gray-800 text-gray-400"
            />
          </div>
        </div>
      </section>
      <section className="ml-4 mt-6 md:ml-[50px] md:mt-6">
        <Button
          text="Rent Now"
          buttonColor="bg-dark-blue rounded-[10px] py-2"
          textColor="text-white-00"
          width={isMobile ? "327px" : "400px"}
          height="56px"
          hPadding={isMobile ? "px-32" : "px-40"}
          onClick={handleRentNow}
        />
      </section>
    </article>
  );
};

export default PickupDropoff;
