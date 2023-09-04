"use client";

import { useState, useEffect } from "react";
import VehicleCard from "./VehicleCard";
import { getRentedCarProps } from "@/utils/carData";

interface car {
  description: string;
  _id: string;
  cartitle: string;
  cartype: string;
  image: string;
  fuelcapacity: number;
  transmission: string;
  capacity: number;
  rentprice: number;
  renter: string;
}

export default function RentedCars() {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    async function getCars() {
      const data = await getRentedCarProps();
      setCars(data);
    }
    getCars();
  }, []);

  return (
    <>
      {cars.slice(0, 4).map((VehicleCarProps: car) => (
        <div key={VehicleCarProps._id}>
          <VehicleCard
            carName={VehicleCarProps.cartitle}
            carType={VehicleCarProps.cartype}
            carImage={VehicleCarProps.image}
            carFuel={VehicleCarProps.fuelcapacity}
            carDriver={VehicleCarProps.transmission}
            carCapacity={VehicleCarProps.capacity}
            carPrice={VehicleCarProps.rentprice}
            carInfo={VehicleCarProps.description}
            data={VehicleCarProps.renter}
            carId={VehicleCarProps._id}
          />
        </div>
      ))}
    </>
  );
}
