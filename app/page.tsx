import Link from "next/link";

import MoreCars from "@/components/MoreCars";
import VehicleCard from "@/components/VehicleCard";
import AdSection from "@/components/AdSection";
import SearchBar from "@/components/SearchBar";
import { getDropDownData } from "@/constant";
import CarModel from "@/models/Car";
import mongooseConnect from "@/utils/mongooseConnect";
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
}

export default async function Home() {
  await mongooseConnect();
  const allCars = await CarModel.find({}).exec();
  const data = JSON.parse(JSON.stringify(allCars));
  const dropDownData = getDropDownData(JSON.parse(JSON.stringify(allCars)));
  return (
    <>
      <main className="flex flex-col  dark:bg-gray-900 xl:mx-auto xl:max-w-[90rem]">
        {/* AdSection */}
        <div className="mb-[2.25rem]  md:mb-[2rem] ">
          <AdSection />
        </div>
        {/* Rental Info */}
        <div className="md:px-[3.75rem]">
          <SearchBar version={1} dropDownData={dropDownData} />
        </div>
        {/* Mobile Search Button */}
        {/* <div className="mb-[2.25rem] mt-[1.25rem] flex h-[3rem] w-full items-center justify-center gap-[.375rem] rounded-[.625rem] bg-blue-500 py-[.81rem] md:hidden">
          <Image
            src="/search-normal.svg"
            alt="search icon"
            width={14}
            height={14}
          />
          <button className="flex text-[.875rem] font-semibold leading-[1.6625rem] text-white">
            Search
          </button>
        </div> */}
        {/* Button Bar */}
        <div className="mb-[1.25rem] mt-[1.5rem] flex h-[1.25rem] justify-between p-6 sm:px-20 md:mt-[2.25rem]">
          <button className="text-[.875rem] font-semibold leading-normal text-gray-400 md:px-[1.25rem] md:text-[1rem]">
            Popular cars
          </button>
          <Link
            className="text-[.75rem] font-semibold leading-normal text-blue-500
            md:px-[1.25rem] md:text-[1rem]"
            href="/search"
          >
            View All
          </Link>
        </div>

        {/* VehicleCard */}
        <div className="flex w-full flex-wrap justify-center gap-[2rem]">
          {data.slice(0, 4).map((VehicleCarProps: car) => (
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
                carId={VehicleCarProps._id}
                carInfo={""}
              />
            </div>
          ))}
        </div>

        {/* Recommended cars */}
        <div className="mb-[1.25rem] mt-[1.94rem] h-[1.25rem] flex-col md:mb-[1.87rem] md:mt-[2.62rem] md:px-[1.25rem]">
          <h2 className="text-[.875rem] font-semibold leading-normal text-gray-400 md:px-[4.00rem] md:text-[1rem]">
            Recommended cars
          </h2>
        </div>
        {/* Rec Cars Cards */}
        <div className="flex w-full flex-wrap justify-center gap-[2rem]">
          {data.slice(4, 12).map((VehicleCarProps: car) => (
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
                carId={VehicleCarProps._id}
                carInfo={""}
              />
            </div>
          ))}
        </div>
        <MoreCars recData={data.slice(4, 12)} />
      </main>
    </>
  );
}
