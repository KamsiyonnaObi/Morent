"use client";

import { useState, useEffect } from "react";
import VehicleCard from "./VehicleCard";
import { getMyCarsProps } from "@/utils/carData";

interface car {
  _id: string;
  cartitle: string;
  cartype: string;
  image: string;
  fuelcapacity: number;
  transmission: string;
  capacity: number;
  rentprice: number;
  renter: string;
  description: string;
}

export default function MyCars() {
  const [myCars, setMyCars] = useState([]);

  useEffect(() => {
    async function getMyCars() {
      const data = await getMyCarsProps();
      setMyCars(data);
    }
    getMyCars();
  }, []);

  return (
    <>
      {myCars.slice(0, 4).map((VehicleCarProps: car) => (
        <div key={VehicleCarProps._id}>
          <VehicleCard
            carName={VehicleCarProps.cartitle}
            carType={VehicleCarProps.cartype}
            carImage={VehicleCarProps.image}
            carFuel={VehicleCarProps.fuelcapacity}
            carDriver={VehicleCarProps.transmission}
            carCapacity={VehicleCarProps.capacity}
            carPrice={VehicleCarProps.rentprice}
            data={VehicleCarProps.renter}
            carInfo={VehicleCarProps.description}
            carId={VehicleCarProps._id}
          />
        </div>
      ))}
    </>
  );
}
