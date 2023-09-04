"use client";
import React from "react";
import Image from "next/image";
import { Props } from "next/script";

import { motion } from "framer-motion";

const AdSection = (props: Props) => {
  return (
    <div>
      {/* Ad Section */}
      <div className="mt-[2rem] flex justify-center sm:gap-[2rem]  md:mt-[.75rem]">
        {/* Left */}
        {/* Background Image */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {
              scale: 0.8,
              opacity: 0,
            },
            visible: {
              scale: 1,
              opacity: 1,
              transition: {
                duration: 0.4,
              },
            },
          }}
        >
          <div
            className="flex h-[14.5rem] w-[20rem] rounded-[.625rem] bg-cover bg-no-repeat sm:h-[23rem] sm:w-[40rem]"
            style={{ backgroundImage: 'url("./Ads3.svg")' }}
          >
            {/* <h1 className="title">Wubba Lubba Dub Dub!</h1> */}
            {/* Headding */}
            <div className="absolute ml-[1rem] mt-[1rem] flex-col">
              <h1 className="mb-[.75rem] text-white font-semibold text-[1erm] leading-[1.2rem} tracking-[-00.1rem] md:text-[2rem] md:leading-[2.4rem] md:tracking-[-.02rem]">
                The Best Platform <br /> for Car Rental
              </h1>
              <h2 className="text-[.75rem] font-medium leading-[1.2rem]	text-white md:text-[1rem] md:leading-[1.6rem] md:tracking-[-.02rem]">
                Ease of doing a car rental safely and
                <br />
                reliably. Of course at a low price.
              </h2>
            </div>

            {/* Car */}

            <motion.div
              animate={{
                x: [-500, 0],
              }}
              transition={{
                duration: 0.5,
              }}
              className="mx-auto mb-[1.25rem] w-[12.25rem] sm:w-[25.375rem]"
            >
              <Image
                className="h-full w-full object-contain object-bottom"
                src="/image7.svg"
                alt="Koenigsegg"
                width={406}
                height={116}
              />
            </motion.div>
          </div>
        </motion.div>
        {/* Right */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {
              scale: 0.8,
              opacity: 0,
            },
            visible: {
              scale: 1,
              opacity: 1,
              transition: {
                duration: 0.4,
              },
            },
          }}
        >
          {/* Background Image */}
          <div
            className="hidden h-[23rem] w-[40rem] rounded-[.625rem] bg-cover bg-no-repeat md:flex"
            style={{ backgroundImage: 'url("./Ads4.svg")' }}
          >
            {/* Headding */}
            <div className="absolute ml-[1rem] mt-[1rem] flex-col">
              <h1 className="mb-[.75rem] text-white font-semibold text-[1erm] leading-[1.2rem} tracking-[-00.1rem] md:text-[2rem] md:leading-[2.4rem] md:tracking-[-.02rem]">
                Easy way to rent a <br /> car at a low price
              </h1>
              <h2 className="text-[.75rem] font-medium leading-[1.2rem]	text-white md:text-[1rem] md:leading-[1.6rem] md:tracking-[-.02rem]">
                Providing cheap car rental services and
                <br />
                safe and comfortable facilities.
              </h2>
            </div>
            {/* Car */}
            <motion.div
              animate={{
                x: [-500, 0],
              }}
              transition={{
                duration: 0.5,
              }}
              className="mx-auto mb-[1.25rem] w-[21.2rem]"
            >
              <Image
                className="h-full w-full object-contain object-bottom"
                src="/image8.svg"
                alt="Nissan GT - R"
                width={406}
                height={116}
              />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AdSection;
