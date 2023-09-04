// import { Discover } from "iconsax-react";

export default function Footer() {
  return (
    // eslint-disable-next-line tailwindcss/no-custom-classname
    <footer className="flex flex-col gap-12 bg-white-100 p-[1.5rem] dark:bg-gray-900">
      <div className=" flex flex-col justify-between gap-12 sm:flex-row">
        <div className="inline-flex flex-col items-start gap-4">
          <h2 className="h-[1.75rem] w-[6.75rem] justify-center text-[1.5rem] font-bold not-italic text-dark-blue">
            MORENT
          </h2>
          <p className="w-[126px] text-12 font-medium not-italic leading-6 tracking-[-0.12px] text-gray-400 dark:text-white-100 sm:text-16 md:w-[292px]">
            Our vision is to provide convenience and help increase your sales
            business
          </p>
        </div>

        <div className="flex-wrap items-start sm:flex">
          <div className="grid grid-cols-2 gap-x-6 gap-y-12 md:grid-cols-3 md:gap-x-[60px]">
            <div className="flex flex-col items-start gap-4">
              <h4 className="flex h-8 justify-center text-[1.25rem] font-semibold not-italic leading-[120%] text-gray-800 dark:text-white-100">
                About
              </h4>
              <ul className="space-y-2 text-gray-800 dark:text-white-100">
                <li>How it works</li>
                <li>Featured</li>
                <li>Partnership</li>
                <li>Bussiness Relation</li>
              </ul>
            </div>

            <div className="order-last flex flex-col items-start gap-4 dark:text-white-100 md:order-none lg:justify-self-start">
              <h4 className="flex h-8 justify-center text-[1.25rem] font-semibold not-italic leading-[120%] text-gray-800 dark:text-white-100">
                Community
              </h4>
              <ul className="space-y-2 text-gray-800 dark:text-white-100">
                <li>Events</li>
                <li>Blog</li>
                <li>Podcast</li>
                <li>Invite a friend</li>
              </ul>
            </div>

            <div className="flex flex-col items-start gap-4">
              <h4 className="flex h-8 justify-center text-[1.25rem] font-semibold not-italic leading-[120%] text-gray-800 dark:text-white-100">
                Socials
              </h4>
              <ul className="space-y-2 text-gray-800 dark:text-white-100">
                <li>Discord</li>
                <li>Instagram</li>
                <li>Twitter</li>
                <li>Facebook</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-between text-gray-800 dark:text-white-100 sm:flex-row lg:border-t-[1px] lg:border-blue-50 lg:pb-[60px] lg:pt-12">
        <div>
          <p className="mt-8 text-12 font-semibold sm:mt-0 md:text-16">
            ©2022 MORENT. All rights reserved
          </p>
        </div>
        <div className="order-first flex justify-between text-12 font-semibold sm:text-16 lg:order-last lg:justify-normal lg:gap-[60px]">
          <p className="">Privacy & Policy</p>
          <p className="">Terms & Condition</p>
        </div>
      </div>
    </footer>
  );
}
