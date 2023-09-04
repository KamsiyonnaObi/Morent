import DASearchBar from "@/components/DASearchBar";
import SideBarFilter from "@/components/SideBarFilter";
import VehicleCard from "@/components/VehicleCard";
import { getDropDownData } from "@/constant";
import SliderComponent from "@/components/SliderComponent";
import FilterStateUpdater from "@/components/FilterStateUpdater";
import SearchBar from "@/components/SearchBar";
import { sideBarFilterProps } from "@/types/component";
import CarModel from "@/models/Car";
import mongooseConnect from "@/utils/mongooseConnect";

const CarSearch = async ({
  params,
  searchParams,
}: {
  params: { slug: string };
  searchParams: { [key: string]: string | string[] | undefined };
}) => {
  await mongooseConnect();

  const allCars = await CarModel.find({}).exec();
  const filteredCars = await CarModel.find({
    ...(searchParams.location && {
      location: { $regex: searchParams.location, $options: "i" },
    }),
    ...(searchParams.types && { cartype: searchParams.types }),
    ...(searchParams.capacity && { capacity: searchParams.capacity }),
    ...(searchParams.price && { rentprice: { $lte: searchParams.price } }),
    ...(searchParams.pickUp && { dropOff: { $lte: searchParams.pickUp } }),
    ...(searchParams.search && {
      cartitle: { $regex: searchParams.search, $options: "i" },
    }),
  }).exec();

  const data = JSON.parse(JSON.stringify(filteredCars));
  const dropDowns = getDropDownData(JSON.parse(JSON.stringify(allCars)));
  const sideBarFilter = dropDowns[1] as sideBarFilterProps[];

  return (
    <main>
      <FilterStateUpdater />
      <div className="flex flex-wrap  dark:bg-[#1A202C] dark:text-white md:flex-row  ">
        <div className="flex flex-wrap justify-center px-5 py-10 dark:bg-gray-900 md:flex-col md:justify-normal">
          <DASearchBar />
          <section className="flex flex-wrap gap-5 md:flex-col">
            {sideBarFilter.map((_Filter: sideBarFilterProps) => {
              return (
                <div key={_Filter.id}>
                  <SideBarFilter FilterElements={_Filter} />
                </div>
              );
            })}
            <SliderComponent />
          </section>
        </div>
        <div className=" flex grow flex-col gap-12 px-5 py-10 dark:bg-[#1E2430]">
          <section className="flex flex-wrap gap-10 rounded-lg px-[1.81rem] py-6 dark:bg-gray-850 xs:inline-flex">
            <SearchBar version={0} dropDownData={dropDowns} />
          </section>
          <section className="flex grow flex-col items-center gap-8 sm:grid sm:grid-cols-2 md:grid-cols-3 md:justify-normal">
            {data.slice(0, 9).map((_VehicleCarProps: any) => {
              return (
                <div key={_VehicleCarProps._id}>
                  <VehicleCard
                    carName={_VehicleCarProps.cartitle}
                    carType={_VehicleCarProps.cartype}
                    carImage={_VehicleCarProps.image}
                    carFuel={_VehicleCarProps.fuelcapacity}
                    carDriver={_VehicleCarProps.transmission}
                    carCapacity={_VehicleCarProps.capacity}
                    carPrice={_VehicleCarProps.rentprice}
                    carInfo={_VehicleCarProps.description}
                    data={_VehicleCarProps.renter}
                    carId={_VehicleCarProps._id}
                  />
                </div>
              );
            })}
          </section>
        </div>
      </div>
    </main>
  );
};

export default CarSearch;
