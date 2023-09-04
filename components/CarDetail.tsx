"use client";

import React, { useState } from "react";
import { useMediaQuery } from "react-responsive";
import Image from "next/image";

import { CarDetailProps } from "@/types/component";

import Button from "./Button";
import StarRating from "./StarRating";
import PickupDropoff from "./PickupDropoff";

const CarDetail = ({
  carName,
  carType,
  carImage,
  carFuel,
  carDriver,
  carCapacity,
  carPrice,
  carOriginalPrice,
  carInfo,
  rating,
  review,
  isRented,
  carId,
  toggleModal,
}: CarDetailProps) => {
  const isMobile = useMediaQuery({ maxWidth: 1024 });

  const [mainImage, setMainImage] = useState("/Ads4.svg");
  const [showCar, setShowCar] = useState(true);

  const handleMainImage = (newMainImage: string) => {
    setMainImage(newMainImage);
  };
  const handleShowCar = () => {
    setShowCar(false);
  };

  return (
    <>
      {showCar ? (
        <article className="relative flex h-[688px] w-[360px] flex-col justify-between rounded-[10px] bg-white-200 py-4 dark:bg-gray-850 dark:text-white-00 md:h-[540px] md:w-[1050px] md:flex-row">
          <section className="flex flex-col">
            {isMobile && (
              <div className="absolute -top-5 right-3 h-6 w-6 bg-white-200 dark:bg-gray-850">
                <h1
                  className="mx-2 cursor-pointer text-16"
                  onClick={() => toggleModal(false)}
                >
                  x
                </h1>
              </div>
            )}
            <div
              className={
                "relative ml-4 h-[232px] w-[327px] rounded-[8px] bg-cover md:ml-6 md:mt-6 md:h-[360px] md:w-[492px] "
              }
              style={{ backgroundImage: `url(${mainImage})` }}
            >
              {mainImage === "/Ads4.svg" && (
                <div className="ml-16 mt-[150px] md:ml-10 md:mt-[140px]">
                  <Image
                    src={carImage ?? "/Car.svg"}
                    alt="Koenigsegg"
                    width={isMobile ? 190 : 408}
                    height={isMobile ? 60 : 129}
                  />
                </div>
              )}
            </div>
            <div className="flex flex-row">
              <div
                className="relative ml-4 mt-6 h-[64px] w-[96px] rounded-[8px] bg-[url('/Ads4.svg')] bg-cover md:ml-6 md:mt-6 md:h-[124px] md:w-[148px]"
                onClick={() => handleMainImage("/Ads4.svg")}
                style={
                  mainImage === "/Ads4.svg"
                    ? {
                        border: "4px solid white",
                        outline: "2px solid blue",
                      }
                    : {}
                }
              >
                <div className="ml-2 mt-6 md:ml-4 md:mt-10">
                  <Image
                    src={carImage ?? "/Car.svg"}
                    alt="Koenigsegg"
                    width={isMobile ? 80 : 116}
                    height={isMobile ? 26 : 36}
                  />
                </div>
              </div>
              <div
                className="relative ml-4 mt-6 h-[64px] w-[96px] rounded-[8px] bg-[url('/View2.svg')] bg-cover md:ml-6 md:mt-6 md:h-[124px] md:w-[148px]"
                onClick={() => handleMainImage("/View2.svg")}
                style={
                  mainImage === "/View2.svg"
                    ? { border: "4px solid white", outline: "2px solid blue" }
                    : {}
                }
              ></div>
              <div
                className="relative ml-4 mt-6 h-[64px] w-[96px] rounded-[8px] bg-[url('/View3.svg')] bg-cover md:ml-6 md:mt-6 md:h-[124px] md:w-[148px]"
                onClick={() => handleMainImage("/View3.svg")}
                style={
                  mainImage === "/View3.svg"
                    ? { border: "4px solid white", outline: "2px solid blue" }
                    : {}
                }
              ></div>
            </div>
          </section>
          <section className="ml-6 mt-8 h-[318px] w-[327px] md:ml-6 md:mt-0 md:h-[508px] md:w-[492px]">
            <div className="flex flex-col ">
              <div className="mt-2 flex flex-row justify-between md:mt-3">
                <h1 className="text-20 font-semibold md:text-32">{carName}</h1>
                {!isMobile && (
                  <h1
                    className="mr-6 cursor-pointer text-24"
                    onClick={() => toggleModal(false)}
                  >
                    x
                  </h1>
                )}
              </div>

              <div className="flex flex-row">
                <StarRating rating={rating} />
                <div className="ml-3 text-12 md:ml-4 md:text-14">
                  {review}+ Reviewers
                </div>
              </div>
            </div>
            <div className="mt-4 h-[72px] w-[295px] text-12 md:mt-6 md:h-[120px] md:w-[463px] md:text-20">
              {carInfo}
            </div>
            <div className="mt-4 flex flex-row text-12 md:mt-6 md:text-20">
              <div className="flex h-[16px] w-[124px] flex-row  justify-between md:h-[28px] md:w-[200px]">
                <div className="text-gray-400">Type Car</div>
                <div>{carType}</div>
              </div>
              <div className="ml-14 flex h-[16px] w-[124px] flex-row justify-between md:ml-9 md:h-[28px] md:w-[200px]">
                <div className="text-gray-400">Capacity</div>
                <div>{carCapacity} Person</div>
              </div>
            </div>
            <div className="mt-4 flex flex-row text-12 md:mt-5 md:text-20">
              <div className="flex h-[16px] w-[124px] flex-row justify-between md:h-[28px] md:w-[200px]">
                <div className="text-gray-400">Transm.</div>
                <div>{carDriver}</div>
              </div>
              <div className="ml-14 flex h-[16px] w-[124px] flex-row  justify-between md:ml-9 md:h-[28px] md:w-[200px]">
                <div className="text-gray-400">Gasoline</div>
                <div>{carFuel}L</div>
              </div>
            </div>
            <div className="mr-4 mt-9 flex flex-row justify-between md:mr-0 md:mt-16 md:h-[56px] md:w-[444px]">
              <div className="flex flex-col">
                <div className="font-semibold md:text-28">
                  ${Number(carPrice).toFixed(2)}/{" "}
                  <span className="text-gray-400 md:text-16">days</span>
                </div>
                <s className="text-gray-400 md:text-16">
                  ${Number(carOriginalPrice).toFixed(2)}
                </s>
              </div>
              {isRented ? (
                <Button
                  buttonColor="bg-blue-100 rounded-[10px] py-2"
                  textColor="text-white-00"
                  hPadding="px-4"
                  width={isMobile ? "w-[140px]" : "w-[140px]"}
                  height={isMobile ? "h-[54px]" : "h-[56px]"}
                  extraStyles={isMobile ? "text-12" : "text-16"}
                  onClick={() => {}}
                  text="Unavailable"
                />
              ) : (
                <Button
                  buttonColor="bg-dark-blue rounded-[10px] py-2"
                  textColor="text-white-00"
                  hPadding="px-4"
                  width={isMobile ? "w-[140px]" : "w-[140px]"}
                  height={isMobile ? "h-[54px]" : "h-[56px]"}
                  extraStyles={isMobile ? "text-12" : "text-16"}
                  onClick={handleShowCar}
                  text="Rent Now"
                />
              )}
            </div>
          </section>
        </article>
      ) : (
        <PickupDropoff toggleModal={toggleModal} carId={carId} />
      )}
    </>
  );
};

export default CarDetail;
