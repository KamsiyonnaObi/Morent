"use client";
import React from "react";
import { useMediaQuery } from "react-responsive";
import Image from "next/image";
import Button from "./Button";

const Confirmation = () => {
  const isMobile = useMediaQuery({ maxWidth: 1024 });

  return (
    <article className="flex h-[476px] w-[327px] flex-col rounded-[10px] bg-white-00 md:h-[484px] md:w-[852px]">
      <section className="flex flex-row justify-between">
        <div className="ml-4 mt-6 items-center md:ml-6 md:mt-6">
          <h4 className="text-20 font-bold">Confirmation</h4>
        </div>
        <div className="mr-6 mt-6 justify-between text-14 text-gray-400 md:mt-6">
          Step 4 of 4
        </div>
      </section>
      <section className="flex flex-col">
        <div className="ml-4 mr-24 text-12 text-gray-400 md:ml-6 md:mr-0 md:text-14">
          We are getting to the end. Just a few clicks and your rental is ready!
        </div>
        <div className="ml-4 mt-4 flex h-[64px] w-[295px] flex-row bg-white-200 md:ml-6 md:mt-8 md:h-[56px] md:w-[804px]">
          <div className="ml-4 mt-6 md:ml-4 md:mt-4">
            <Image
              src={"Checkboxes.svg"}
              alt="Logo"
              width={isMobile ? 21 : 24}
              height={isMobile ? 21 : 24}
            />
          </div>
          <p className="ml-4 mt-4 text-12 font-semibold md:ml-4 md:mt-4 md:text-16">
            I agree with sending an Marketing and newsletter emails. No spam,
            promised!
          </p>
        </div>
        <div className="ml-4 mt-2 flex h-[64px] w-[295px] flex-row bg-white-200 md:ml-6 md:mt-4 md:h-[56px] md:w-[804px]">
          <div className="ml-4 mt-6 md:ml-4 md:mt-4">
            <Image
              src={"Checkboxes.svg"}
              alt="Logo"
              width={isMobile ? 16 : 24}
              height={isMobile ? 16 : 24}
            />
          </div>
          <p className="ml-4 mt-4 text-12 font-semibold md:ml-4 md:mt-4 md:text-16">
            I agree with our
            <span className="underline"> terms and conditions</span> and
            <span className="underline"> privacy policy</span>.
          </p>
        </div>
        <div className="ml-4 mt-6 md:ml-6 md:mt-8">
          <Button
            text="Rent Now"
            buttonColor="bg-dark-blue"
            textColor="text-white-00"
            width={isMobile ? "100px" : "140px"}
            height={isMobile ? "36px" : "56px"}
            hPadding="px-4"
            extraStyles="text-16"
            onClick={() => {}}
          />
        </div>
        <div className="ml-4 mt-8 md:ml-6 md:mt-8">
          <Image src={"Security.svg"} alt="Logo" width={32} height={32} />
        </div>
        <div className="ml-4 mt-4 text-16 font-semibold md:ml-6 md:mt-8 md:text-20">
          All your data are safe
        </div>
        <div className="ml-4 text-12 text-gray-400 md:ml-6 md:text-14">
          We are using the most advanced security to provide you the best
          experience ever.
        </div>
      </section>
    </article>
  );
};

export default Confirmation;
