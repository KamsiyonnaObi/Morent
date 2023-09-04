"use client";
import React, { useState } from "react";
import { CldUploadWidget } from "next-cloudinary";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

type Props = {};

const AddCar = (props: Props) => {
  const router = useRouter();
  const [isSubmitted, setIsSubmitted] = useState(true);
  const [formData, setFormData] = useState({
    carTitle: "",
    carType: "",
    rentPrice: "",
    capacity: "",
    transmission: "",
    location: "",
    fuelCapacity: "",
    description: "",
    image: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const submitForm = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // create formData object
    const newFormData = new FormData();

    // append each formData value
    newFormData.append("carTitle", formData.carTitle);
    newFormData.append("carType", formData.carType);
    newFormData.append("rentPrice", formData.rentPrice);
    newFormData.append("capacity", formData.capacity);
    newFormData.append("transmission", formData.transmission);
    newFormData.append("location", formData.location);
    newFormData.append("fuelCapacity", formData.fuelCapacity);
    newFormData.append("description", formData.description);
    newFormData.append("image", formData.image);

    // create POST to api/cars/new
    try {
      const response = await fetch("/api/cars/new", {
        method: "POST",
        body: newFormData,
      });
      const data = await response.json();
      if (data.response === "invalid inputs") {
        setIsSubmitted(false);
      } else {
        router.push("/");
        setIsSubmitted(true);
      }
    } catch (error) {
      setIsSubmitted(false);
    }
  };
  const notify = () => toast("Car Registered");

  return (
    <div className="mx-auto ">
      <form
        onSubmit={submitForm}
        className="mx-auto  my-[30px] max-w-[852px] sm:my-[50px]"
      >
        <div className="space-y-12 bg-white px-6 py-10 dark:bg-gray-850  sm:py-[30px]">
          <div className="border-b border-gray-900/10 pb-12">
            <h2 className="text-xl font-bold leading-7 text-gray-900 dark:text-white-00">
              Add a Car for Rent
            </h2>
            <p className="mt-1 text-sm font-medium leading-6 text-gray-600 dark:text-white-00">
              Please enter your car info
            </p>

            <h2 className="text-lg font-extrabold text-blue-500">CAR INFO</h2>
            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              <div className="sm:col-span-3">
                <label
                  htmlFor="carTitle"
                  className="block text-sm font-semibold leading-6 text-gray-900 dark:text-white-00 sm:text-16"
                >
                  Car Title
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="carTitle"
                    value={formData.carTitle}
                    onChange={handleChange}
                    placeholder="Your title"
                    className="block w-full rounded-md border-0 bg-white-200 py-3 pl-3.5 text-gray-900 shadow-sm ring-1 ring-inset  ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-500 dark:bg-gray-800 dark:text-white-00 sm:py-4 sm:pl-6 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="sm:col-span-3">
                <label
                  htmlFor="carType"
                  className=" block text-sm font-semibold leading-6 text-gray-900 dark:text-white-00 sm:text-16"
                >
                  Car Type
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="carType"
                    placeholder="Brand Name"
                    value={formData.carType}
                    onChange={handleChange}
                    className="block w-full rounded-md border-0 bg-white-200 py-3 pl-3.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-500 dark:bg-gray-800 dark:text-white-00 sm:py-4 sm:pl-6 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="sm:col-span-3">
                <label
                  htmlFor="rentPrice"
                  className="block  text-sm font-semibold leading-6 text-gray-900 dark:text-white-00 sm:text-16"
                >
                  Rent Price
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="rentPrice"
                    placeholder="Price in dollars"
                    value={formData.rentPrice}
                    onChange={handleChange}
                    className="block w-full rounded-md border-0 bg-white-200 py-3 pl-3.5  text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-500 dark:bg-gray-800 dark:text-white-00 sm:py-4 sm:pl-6 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div className="sm:col-span-3">
                <label
                  htmlFor="capacity"
                  className="block text-sm font-semibold leading-6 text-gray-900 dark:text-white-00 sm:text-16"
                >
                  Capacity
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="capacity"
                    placeholder="Capacity in persons"
                    value={formData.capacity}
                    onChange={handleChange}
                    className="block w-full rounded-md border-0 bg-white-200 py-3 pl-3.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-500 dark:bg-gray-800 dark:text-white-00 sm:py-4 sm:pl-6 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div className="sm:col-span-3">
                <label
                  htmlFor="transmission"
                  className="block text-sm font-semibold leading-6 text-gray-900 dark:text-white-00 sm:text-16"
                >
                  Transmission
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="transmission"
                    placeholder="Car Type"
                    value={formData.transmission}
                    onChange={handleChange}
                    className="block w-full rounded-md border-0 bg-white-200 py-3 pl-3.5 text-gray-900 shadow-sm ring-1  ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-500 dark:bg-gray-800 dark:text-white-00 sm:py-4 sm:pl-6 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div className="sm:col-span-3">
                <label
                  htmlFor="location"
                  className="block text-sm font-semibold leading-6 text-gray-900 dark:text-white-00 sm:text-16"
                >
                  Location
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="location"
                    placeholder="Select your city"
                    value={formData.location}
                    onChange={handleChange}
                    className="block w-full rounded-md border-0 bg-white-200 py-3 pl-3.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-500 dark:bg-gray-800 dark:text-white-00 sm:py-4 sm:pl-6 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div className="sm:col-span-3">
                <label
                  htmlFor="fuelCapacity"
                  className="block text-sm font-semibold leading-6 text-gray-900 dark:text-white-00 sm:text-16"
                >
                  Fuel Capacity
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="fuelCapacity"
                    placeholder="Fuel Capacity in Litres"
                    value={formData.fuelCapacity}
                    onChange={handleChange}
                    className="block w-full rounded-md border-0 bg-white-200 py-3 pl-3.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-500 dark:bg-gray-800 dark:text-white-00 sm:py-4 sm:pl-6 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div className="sm:col-span-3">
                <label
                  htmlFor="shortDescription"
                  className="block text-sm font-semibold leading-6 text-gray-900 dark:text-white-00 sm:text-16"
                >
                  Short Description
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="description"
                    placeholder="Enter a short description"
                    value={formData.description}
                    onChange={handleChange}
                    className="block w-full rounded-md border-0 bg-white-200 py-3 pl-3.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-500 dark:bg-gray-800 dark:text-white-00 sm:py-4 sm:pl-6 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
            </div>
            <div className="border-b border-gray-900/10 pb-12">
              <CldUploadWidget
                uploadPreset="breaking-bugs"
                onUpload={(result: any) => {
                  setFormData((prevData) => ({
                    ...prevData,
                    image: result?.info?.secure_url || "",
                  }));
                }}
              >
                {({ open }) => {
                  function handleOnClick(
                    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
                  ) {
                    e.preventDefault();
                    open();
                  }

                  return (
                    <>
                      <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                        <div className="col-span-full">
                          <button className="w-full" onClick={handleOnClick}>
                            <label
                              htmlFor="cover-photo"
                              className="block justify-start text-base font-bold leading-6 text-gray-900 dark:text-white-00"
                            >
                              Upload Images
                            </label>
                            <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-400 px-6 py-10">
                              <div className="text-center">
                                <svg
                                  className="mx-auto h-12 w-12 text-gray-300"
                                  viewBox="0 0 24 24"
                                  fill="currentColor"
                                  aria-hidden="true"
                                >
                                  <path
                                    fill-rule="evenodd"
                                    d="M1.5 6a2.25 2.25 0 012.25-2.25h16.5A2.25 2.25 0 0122.5 6v12a2.25 2.25 0 01-2.25 2.25H3.75A2.25 2.25 0 011.5 18V6zM3 16.06V18c0 .414.336.75.75.75h16.5A.75.75 0 0021 18v-1.94l-2.69-2.689a1.5 1.5 0 00-2.12 0l-.88.879.97.97a.75.75 0 11-1.06 1.06l-5.16-5.159a1.5 1.5 0 00-2.12 0L3 16.061zm10.125-7.81a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0z"
                                    clip-rule="evenodd"
                                  />
                                </svg>
                                <div className="mt-4 flex text-sm leading-6 text-gray-600">
                                  <label
                                    htmlFor="file-upload"
                                    className="relative cursor-pointer rounded-md  font-semibold text-gray-900 focus-within:outline-none focus-within:ring-2 focus-within:ring-blue-500 focus-within:ring-offset-2 hover:text-blue-500 dark:text-white-00"
                                  >
                                    <p className="pl-1">
                                      Drag and drop images, or&nbsp;
                                    </p>
                                    <input
                                      id="file-upload"
                                      name="file-upload"
                                      type="file"
                                      className="sr-only"
                                    />
                                  </label>
                                  <span className="text-blue-600">Browse</span>
                                </div>
                                <p className="text-xs leading-5 text-gray-600">
                                  High resolution images(png,jpg,gif)
                                </p>
                              </div>
                            </div>
                          </button>
                          <div className="mt-6 flex justify-end gap-x-6">
                            <button
                              type="submit"
                              className="w-full rounded-[10px] bg-blue-500 px-[26px] py-[18px] text-base font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500 sm:w-auto"
                              onClick={notify}
                            >
                              Register Car
                            </button>
                          </div>
                        </div>
                      </div>
                    </>
                  );
                }}
              </CldUploadWidget>
            </div>
            <h2 className="">
              {isSubmitted ? "" : "Error: please check form inputs"}
            </h2>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddCar;
