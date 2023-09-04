"use client";
import React, { useState } from "react";
import { CldUploadWidget } from "next-cloudinary";
import Button from "./Button";
import { useMediaQuery } from "react-responsive";
import useUserState from "@/store/userStore";
import { createPortal } from "react-dom";

const UserBanner = () => {
  const isMobile = useMediaQuery({ maxWidth: 1024 });
  const { authenticatedUser, refreshState } = useUserState();
  const [imageType, setImageType] = useState("");
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [currImage, setCurrImage] = useState("none");

  const handleOnSet = (e: React.MouseEvent<HTMLButtonElement>) => {
    const { name } = e.currentTarget;
    setImageType(name);
    setIsFormOpen(true);
  };

  const handleCloseForm = () => {
    setIsFormOpen(false);
    setCurrImage("none");
  };

  const handleChangeImage = (result: string) => {
    setCurrImage(result);
  };

  const handleUserImage = async (newImage: string) => {
    if (newImage === "none") return;
    try {
      const response = await fetch("/api/users/profile", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          imageType,
          imageURL: newImage,
        }),
      });

      if (response.ok) {
        refreshState();
      } else {
        console.error("Failed to update user image");
      }
    } catch (error) {
      console.error("An error occurred:", error);
    }
  };

  return (
    <div className="relative ml-6 h-[301px] w-[327px] overflow-hidden dark:text-white-00 md:ml-16 md:w-[1312px]">
      <div
        className={`absolute inset-0 h-1/2 md:h-3/5 `}
        style={{
          backgroundImage: `url(${authenticatedUser.userBanner})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div className="absolute bottom-0 h-1/2 w-full bg-white-00 dark:bg-gray-800 md:h-2/5" />
      <div
        className={`absolute top-[38%] ml-3 h-[70px] w-[70px] rounded-full md:top-[40%] md:ml-8 md:h-[160px] md:w-[160px]`}
        style={{
          backgroundImage: `url(${authenticatedUser.userAvatar})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div className="absolute top-[195px] ml-[13px] flex h-[50px] flex-col md:top-[213px] md:ml-[223px]">
        <div className="mb-1 text-20 font-semibold">
          {authenticatedUser.fullName}
        </div>
        <div className="text-14 text-gray-400">
          {authenticatedUser.userTitle}
        </div>
      </div>
      <div className="absolute left-[207px] top-[245px] md:left-[1132px] md:top-[220px]">
        <Button
          buttonColor="bg-dark-blue rounded-[10px] py-2"
          textColor="text-white-00"
          hPadding="px-4"
          width={isMobile ? "w-[110px]" : "w-[130px]"}
          height={isMobile ? "h-[36px]" : "h-[46px]"}
          extraStyles={isMobile ? "text-12" : "text-14"}
          name="avatar"
          onClick={handleOnSet}
          text="Edit Profile"
        />
      </div>
      <div className="absolute left-[209px] top-[104px] md:left-[1150px] md:top-[119px]">
        <Button
          buttonColor="bg-opacity-40 bg-white-00 rounded-[5px] md:py-2"
          textColor="text-white-00"
          hPadding="px-4"
          width={isMobile ? "w-[110px]" : "w-[130px]"}
          height={isMobile ? "h-[36px]" : "h-[46px]"}
          extraStyles={isMobile ? "text-12" : "text-14"}
          name="banner"
          onClick={handleOnSet}
          text="Edit Cover"
        />
      </div>

      {isFormOpen &&
        createPortal(
          <article className="fixed left-0 top-0 flex h-[100vh] w-[100vw] justify-center bg-[#00000042]">
            <div className="mt-10 h-1/3 w-2/3 bg-slate-100 md:h-2/3 md:w-1/3">
              <div className="ml-[58vw] mt-[1vh] text-20 md:ml-[31vw]">
                <button onClick={handleCloseForm}>x</button>
              </div>
              <div
                className={`ml-[17vw] mt-[2vh] h-[140px] w-[140px] justify-center md:ml-[6vw] md:mt-[4vh] ${
                  imageType === "avatar" && "rounded-full"
                }  md:h-[320px] md:w-[320px]`}
                style={{
                  backgroundImage: `url(${
                    currImage === "none"
                      ? imageType === "avatar"
                        ? authenticatedUser.userAvatar
                        : authenticatedUser.userBanner
                      : currImage
                  })`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              />
              <div className="mt-[5vh] flex flex-row md:mt-[15vh]">
                <CldUploadWidget
                  uploadPreset="breaking-bugs"
                  onUpload={(result: any) =>
                    handleChangeImage(result.info.secure_url)
                  }
                >
                  {({ open }) => {
                    const handleOnClick = (
                      e: React.MouseEvent<HTMLButtonElement>
                    ) => {
                      e.preventDefault();
                      open();
                    };
                    return (
                      <div className="mx-[1.2vw] md:mx-[1.5vw]">
                        <Button
                          buttonColor="bg-dark-blue rounded-[10px] py-2"
                          textColor="text-white-00"
                          hPadding="px-4"
                          width={isMobile ? "w-[110px]" : "w-[130px]"}
                          height={isMobile ? "h-[36px]" : "h-[46px]"}
                          extraStyles={isMobile ? "text-12" : "text-14"}
                          onClick={handleOnClick}
                          text="Select Image"
                        />
                      </div>
                    );
                  }}
                </CldUploadWidget>
                <Button
                  buttonColor="bg-dark-blue rounded-[10px] py-2"
                  textColor="text-white-00"
                  hPadding="px-4"
                  width={isMobile ? "w-[110px]" : "w-[130px]"}
                  height={isMobile ? "h-[36px]" : "h-[46px]"}
                  extraStyles={isMobile ? "text-12" : "text-14"}
                  onClick={() => {
                    handleUserImage(currImage);
                    handleCloseForm();
                  }}
                  text="Save"
                />
              </div>
            </div>
          </article>,
          document.body
        )}
    </div>
  );
};

export default UserBanner;
