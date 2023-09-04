"use client";

import React, { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";
import Image from "next/image";

import { VehicleCardProps } from "@/types/component";
import { Heart, GasStation, Profile2User } from "iconsax-react";
import Button from "./Button";

import CarDetail from "./CarDetail";
import { motion } from "framer-motion";
import useUserState from "@/store/userStore";

import { toast } from "react-toastify";

const VehicleCard = ({
  carName,
  carType,
  carImage,
  carFuel,
  carDriver,
  carCapacity,
  carPrice,
  carInfo,
  carId,
}: VehicleCardProps) => {
  const { authenticatedUser, refreshState } = useUserState();

  const isMobile = useMediaQuery({ maxWidth: 1024 });

  const [isLiked, setIsLiked] = useState(false);
  const [isFormOpen, setIsFormOpen] = useState(false);

  useEffect(() => {
    const favorites = authenticatedUser.favorite;
    const liked = favorites?.includes(carId);

    setIsLiked(liked);
  }, [authenticatedUser, carId]);

  const handleFavoriteCar = async () => {
    try {
      const response = await fetch(`/api/cars/${carId}/favorite`);
      const results = await response.json();

      if (results.message === "success") {
        setIsLiked(true);
        toast("Car Favorited");
        refreshState();
      } else if (results.message === "Failure") {
        setIsLiked(false);
        toast("Car Unfavorited");
        refreshState();
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleFormOpen = () => {
    setIsFormOpen(true);
  };

  return (
    <article className=" flex h-[240px] w-[327px] flex-col justify-between rounded-[10px] bg-white py-4 dark:bg-gray-850 dark:text-white-00 md:h-[388px] md:w-[304px]">
      <section className="flex flex-row justify-between pb-4 md:mb-4">
        <div className="ml-6 mt-4 items-center md:mt-6">
          <div className="whitespace-nowrap text-16 font-bold md:text-20">
            {carName}
          </div>
          <div className="text-12 text-gray-400 md:text-14">{carType}</div>
        </div>

        <motion.button
          whileHover={{
            scale: 1.2,
            transition: { duration: 1 },
          }}
          whileTap={{ scale: 1.6 }}
          className="mr-6 mt-4 justify-between md:mt-6"
          onClick={handleFavoriteCar}
        >
          <Heart
            size={isMobile ? 16 : 24}
            color={isLiked ? "red" : "gray"}
            variant={isLiked ? "Bold" : "Outline"}
          />
        </motion.button>
      </section>
      <section className="mx-1 flex items-center justify-between gap-12 text-12 xs:flex-row sm:mt-1 sm:flex-col sm:text-14">
        <div className="ml-2">
          <Image
            src={carImage ?? "/Car.svg"}
            alt="Car"
            width={isMobile ? 160 : 248}
            height={isMobile ? 64 : 100}
            className="md:w-[248px]"
          />
        </div>
        <div className="mb-2 flex flex-col object-contain text-10 sm:inline-flex sm:flex-row sm:text-sm ">
          <div className=" inline-flex  text-gray-400 md:mr-4">
            <GasStation
              size={isMobile ? 14 : 24}
              variant="Bold"
              className="self-center"
            />
            <span className="ml-1 self-center">{carFuel} L</span>
          </div>
          <div className=" inline-flex text-gray-400 md:mr-4">
            <Image
              src={"/Handle.png"}
              alt="Handle"
              width={isMobile ? 14 : 24}
              height={isMobile ? 14 : 24}
              className="self-center"
            />
            <span className="ml-1 self-center">{carDriver}</span>
          </div>
          <div className=" inline-flex text-gray-400">
            <Profile2User
              size={isMobile ? 14 : 24}
              variant="Bold"
              className="self-center"
            />
            <span className="ml-1 self-center">{carCapacity} People</span>
          </div>
        </div>
      </section>
      <section className="mx-6 flex flex-row items-center justify-between font-bold ">
        <div className="text-16 md:text-20">
          ${carPrice}/{" "}
          <span className="text-16 text-gray-400 md:text-20">day</span>
        </div>
        <div>
          <Button
            buttonColor="bg-dark-blue rounded-[10px] py-2"
            textColor="text-white-00"
            hPadding="px-4"
            width={isMobile ? "w-[100px]" : "w-[116px]"}
            height={isMobile ? "h-[36px]" : "h-[44px]"}
            extraStyles={isMobile ? "text-12" : "text-16"}
            onClick={handleFormOpen}
            text="More Info"
          />
        </div>
      </section>
      {isFormOpen && (
        <section className="fixed left-0 top-0 flex h-[100vh] w-[100vw] justify-center bg-[#00000042]">
          <div className="mt-32 md:mt-64">
            <CarDetail
              carName={carName}
              carImage={carImage}
              data={undefined}
              carInfo={carInfo}
              carType={carType}
              carFuel={carFuel}
              carDriver={carDriver}
              carCapacity={carCapacity}
              carPrice={carPrice}
              carOriginalPrice={Math.floor(carPrice * 1.25)}
              rating={4}
              review={30}
              isRented={false}
              carId={carId}
              toggleModal={setIsFormOpen}
            />
          </div>
        </section>
      )}
    </article>
  );
};

export default VehicleCard;
