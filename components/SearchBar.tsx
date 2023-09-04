"use client";
import React, { useState } from "react";
import { useMediaQuery } from "react-responsive";

import Image from "next/image";
import Button from "./Button";
import { ArrowDown2 } from "iconsax-react";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import { SearchBarProps } from "@/types/component";

import { useFilterState } from "@/store/usefilterStore";
import DropdownFilter from "./DropdownFilter";

const SearchBar = ({ version, dropDownData }: SearchBarProps) => {
  const isMobile = useMediaQuery({ maxWidth: 1024 });

  const { setFilter } = useFilterState();

  const [selectedDate1, setSelectedDate1] = useState<Date | null>(null);
  const [selectedDate2, setSelectedDate2] = useState<Date | null>(null);

  const handleDateChange1 = (date: Date | null) => {
    setSelectedDate1(date);
    setFilter("pickUp", date as Date);
  };

  const handleDateChange2 = (date: Date | null) => {
    setSelectedDate2(date);
    setFilter("dropOff", date as Date);
  };

  return (
    <article
      className={`flex h-[370px] w-[327px] flex-col rounded-[10px] bg-white-00 dark:bg-gray-850 md:h-[136px] ${
        version === 1 ? "md:w-[1312px]" : "md:w-[1015px]"
      } md:flex-row`}
    >
      <section
        className={`ml-3 mt-5 flex h-[76px] w-[302px] flex-col md:ml-7 md:h-[88px] ${
          version === 1 ? "md:w-[348px]" : "md:w-[272px]"
        }`}
      >
        <DropdownFilter
          filterElements={dropDownData[0][0].filterElements}
          filterTitle={"Location"}
        />
      </section>
      <section
        className={`ml-3 mt-5 flex h-[76px] w-[302px] flex-col md:ml-7 md:h-[88px] ${
          version === 1 ? "md:w-[348px]" : "md:w-[272px]"
        }`}
      >
        <div className="flex flex-row">
          <Image
            src={"/Calendar.svg"}
            alt="Calendar"
            width={isMobile ? 14 : 16}
            height={isMobile ? 14 : 16}
          />
          <div className="ml-2 text-14 font-semibold dark:text-white-00 md:text-16">
            Pick-up
          </div>
        </div>
        <div className="relative mt-2 text-10 md:text-12">
          <DatePicker
            selected={selectedDate1}
            onChange={handleDateChange1}
            dateFormat="MM/dd/yyyy"
            placeholderText="Select a date"
            className={`h-[46px] w-[302px] rounded-[10px] bg-white-200 px-4 py-1 dark:bg-gray-800 md:h-[56px] ${
              version === 1 ? "md:w-[348px]" : "md:w-[272px]"
            }`}
          />
          <ArrowDown2 className="absolute right-4 top-[50%] h-[12px] w-[12px] -translate-y-1/2 md:h-[14px] md:w-[14px]" />
        </div>
      </section>
      <section
        className={`ml-3 mt-5 flex h-[76px] w-[302px] flex-col md:ml-7 md:h-[88px] ${
          version === 1 ? "md:w-[348px]" : "md:w-[272px]"
        }`}
      >
        <div className="flex flex-row">
          <Image
            src={"/Calendar.svg"}
            alt="Calendar"
            width={isMobile ? 14 : 16}
            height={isMobile ? 14 : 16}
          />
          <div className="ml-2 text-14 font-semibold dark:text-white-00 md:text-16">
            Drop-off
          </div>
        </div>
        <div className="relative mt-2 text-10 md:text-12">
          <DatePicker
            selected={selectedDate2}
            onChange={handleDateChange2}
            dateFormat="MM/dd/yyyy"
            placeholderText="Select a date"
            className={`h-[46px] w-[302px] rounded-[10px] bg-white-200 px-4 py-1 dark:bg-gray-800 md:h-[56px] ${
              version === 1 ? "md:w-[348px]" : "md:w-[272px]"
            }`}
          />
          <ArrowDown2 className="absolute right-4 top-[50%] h-[12px] w-[12px] -translate-y-1/2 md:h-[14px] md:w-[14px]" />
        </div>
      </section>
      <section className="ml-3 mt-7 md:ml-5 md:mt-12">
        <Button
          text={isMobile || version === 1 ? "Q Search" : "Q"}
          buttonColor="bg-blue-500"
          textColor="text-white-00"
          width={isMobile ? "327px" : "60px"}
          height={isMobile ? "48px" : "56px"}
          hPadding={isMobile ? "px-28" : "px-8"}
          extraStyles="py-2 md:py-4 rounded-[10px] "
        />
        {/* <Image src="/search-normal.svg" alt="Search" width={14} height={14} className="mr-2" /> */}
      </section>
    </article>
  );
};

export default SearchBar;
