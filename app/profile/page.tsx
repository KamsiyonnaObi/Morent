import MyCars from "@/components/MyCars";
import ProfileButton from "@/components/ProfileButton";
import RentedCars from "@/components/RentedCar";
import UserBanner from "@/components/UserBanner";

export default async function Profile() {
  return (
    <div className="mx-[1.56rem] flex h-auto flex-col bg-white-200 dark:bg-gray-900 md:mx-auto md:max-w-[90rem]">
      <title className="my-[1.5rem] text-[1.25rem] font-bold leading-normal text-gray-900 md:mb-[1.81rem] md:mt-[4.25rem]">
        My Profile
      </title>
      {/* Profile Panel */}
      <UserBanner />
      {/* Rented Cars */}
      <main>
        <button className="mb-[1.25rem] ml-6 mt-[2.5rem] text-[.875rem] font-semibold leading-normal text-gray-400 md:ml-11 md:px-[1.25rem] md:text-[1rem]">
          Rented Cars
        </button>
        <div className="flex w-full flex-wrap justify-center gap-[2rem]">
          <RentedCars />
        </div>
      </main>
      {/* My cars for rent */}
      <div className="hidden flex-col md:flex">
        <button className="mb-[1.25rem] flex text-[.875rem] font-semibold leading-normal	text-gray-400 md:mt-[2.5rem] md:px-[1.25rem] md:text-[1rem]">
          My Cars for Rent
        </button>
        <div className="flex w-full flex-wrap justify-center gap-[2rem]">
          <MyCars />
        </div>
      </div>
      {/* Add More Cars for Rent Button */}
      <div className="mx-auto my-[3rem] flex h-[2.31rem] w-[12rem] shrink-0 justify-center gap-[.5rem] rounded-[.25rem] bg-blue-500 px-[1.25rem] md:my-[3rem] md:w-[14.25rem]">
        <ProfileButton />
      </div>
    </div>
  );
}
