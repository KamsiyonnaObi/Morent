"use client";
import React, { useState } from "react";
import VehicleCard from "./VehicleCard";

interface car {
  _id: string;
  cartitle: string;
  cartype: string;
  image: string;
  description: string;
  fuelcapacity: number;
  transmission: string;
  capacity: number;
  rentprice: number;
  renter: string;
}

const MoreCars = ({ recData }: { recData: car[] }) => {
  const [showMoreCars, setShowMoreCars] = useState(false);
  const showCars = () => {
    setShowMoreCars(true);
  };

  return (
    <article>
      {showMoreCars && (
        <div className="mb-[4rem] flex w-full flex-wrap justify-center gap-[2rem]">
          {recData.slice(8, 16).map((VehicleCarProps: car) => (
            <div key={VehicleCarProps._id}>
              <VehicleCard
                carInfo={VehicleCarProps.description}
                carName={VehicleCarProps.cartitle}
                carType={VehicleCarProps.cartype}
                carImage={VehicleCarProps.image}
                carFuel={VehicleCarProps.fuelcapacity}
                carDriver={VehicleCarProps.transmission}
                carCapacity={VehicleCarProps.capacity}
                carPrice={VehicleCarProps.rentprice}
                data={VehicleCarProps.renter}
                carId={VehicleCarProps._id}
              />
            </div>
          ))}
        </div>
      )}
      {!showMoreCars && (
        <div className="mx-auto my-[3rem] flex h-[2.25rem] w-[8.5rem] shrink-0 justify-center gap-[.5rem] rounded-[.25rem] bg-blue-500 px-[1.25rem] md:my-[4rem] md:w-[14.25rem]">
          <button
            className="flex	items-center text-[.75rem] font-semibold leading-normal text-white md:text-[1rem]	md:font-bold"
            onClick={showCars}
          >
            Show More Cars
          </button>
        </div>
      )}
    </article>
  );
};

export default MoreCars;
