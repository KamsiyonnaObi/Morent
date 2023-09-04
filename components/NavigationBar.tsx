"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import mode from "@/public/mode.svg";
import add from "@/public/addCar.svg";
import close from "@/public/close.svg";
import house from "@/public/home.svg";
import search from "@/public/search.svg";
import useThemeState from "@/store/themeStore";
import useUserState from "@/store/userStore";
import moon from "@/public/moon.svg";
import altHome from "@/public/althome.svg";
import altSearch from "@/public/altSearch.svg";
import altAdd from "@/public/altAddCar.svg";
import { useRouter, usePathname } from "next/navigation";

const NavigationBar = () => {
  const router = useRouter();
  const pathname = usePathname();

  const { theme, toggleTheme } = useThemeState();
  const { authenticatedUser, refreshState } = useUserState();
  const toggleMenu = () => {
    setExpanded(!expanded);
  };
  const [expanded, setExpanded] = useState(false);
  const navigateToLogin = () => {
    setExpanded((prev) => !prev);
    router.push("/login");
  };
  const logoutUser = async () => {
    const response = await fetch("/api/logout");
    const data = response.json();

    return data;
  };
  const navigateToLogout = async () => {
    setExpanded((prev) => !prev);
    await logoutUser();
    setIsVisible(false);
    refreshState();
  };
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };
  return (
    // Main container
    <nav className="flex flex-row justify-between border-b py-[1.75rem] pl-[3.75rem] pr-[3.6875rem] dark:bg-[#1A202C] ">
      {/* Banner Content */}
      <div className="text-[32px] font-bold not-italic leading-[120%] text-blue-500">
        MORENT
      </div>

      <div className="inline-flex flex-row items-center gap-[1.88rem]">
        {/* Options */}
        <ul className="hidden flex-col items-center gap-[1.88rem] md:inline-flex md:flex-row">
          <li
            className={`text-[1rem] font-semibold not-italic leading-[150%] ${
              pathname === "/"
                ? "text-blue-500"
                : "text-gray-700 dark:text-[#F6F7F9]"
            }`}
          >
            <button>
              <Link href="/">Home</Link>
            </button>
          </li>
          <li
            className={`text-[1rem] font-semibold not-italic leading-[150%] ${
              pathname === "/search"
                ? "text-blue-500"
                : "text-gray-700 dark:text-[#F6F7F9]"
            }`}
          >
            <button>
              <Link href="/search">Search</Link>
            </button>
          </li>
          <li
            className={`text-[1rem] font-semibold not-italic leading-[150%] ${
              pathname === "/addCar"
                ? "text-blue-500"
                : "text-gray-700 dark:text-[#F6F7F9]"
            }`}
          >
            <button>
              <Link href="/addCar">Add Car</Link>
            </button>
          </li>
          {authenticatedUser?.userAvatar ? (
            <>
              <div className="h-11 w-11">
                <Image
                  alt="profile-picture"
                  src={authenticatedUser?.userAvatar}
                  className="rounded-full object-contain"
                  width={44}
                  height={44}
                  onClick={toggleVisibility}
                />
              </div>
              {isVisible && (
                <div className="absolute right-10 top-20 z-10 w-[200px] gap-2.5">
                  <Link href="/profile" onClick={toggleVisibility}>
                    <div className="flex items-center justify-center gap-1.5 rounded-sm border bg-white py-3.5">
                      <div className="h-5 w-5">
                        <Image
                          alt="profile-picture"
                          src={authenticatedUser?.userAvatar}
                          className="rounded-full object-contain"
                          width={20}
                          height={20}
                        />
                      </div>
                      <p className="text-sm font-semibold text-blue-500">
                        My Profile
                      </p>
                    </div>
                  </Link>
                  <button
                    onClick={navigateToLogout}
                    className="w-[200px] rounded-sm bg-red-400 py-3.5 text-sm text-white"
                  >
                    Logout
                  </button>
                </div>
              )}
            </>
          ) : (
            <li className="">
              <div className="">
                <button className="rounded border-sky-600 bg-blue-700 px-[1.25rem] py-[0.47rem] text-white">
                  <Link href="/login">Login</Link>
                </button>
              </div>
            </li>
          )}
          <li>
            <span className="animate-pulse block h-9 w-0.5 bg-blue-500"></span>
          </li>
          <li>
            <button onClick={toggleTheme}>
              {theme === "dark" ? (
                <Image src={moon} alt="" />
              ) : (
                <Image src={mode} alt="" />
              )}
            </button>
          </li>
        </ul>

        {/* Light and Dark Toggle */}
        <section className="flex flex-row justify-between gap-2 md:hidden">
          <button onClick={toggleTheme}>
            {theme === "dark" ? (
              <Image src={moon} alt="" />
            ) : (
              <Image src={mode} alt="" />
            )}
          </button>
          {/* Profile Picture */}
          {authenticatedUser?.userAvatar && (
            <div className="h-7 w-7">
              <Link href="/profile">
                <Image
                  alt="profile-picture"
                  src={authenticatedUser?.userAvatar}
                  className="rounded-full object-contain"
                  width={28}
                  height={28}
                />
              </Link>
            </div>
          )}

          {/* Hamburger */}
          <div className="" onClick={toggleMenu}>
            <div className="space-y-2">
              <span className="animate-pulse block h-0.5 w-8 bg-gray-700 dark:bg-white-200"></span>
              <span className="animate-pulse block h-0.5 w-8 bg-gray-700 dark:bg-white-200"></span>
              <span className="animate-pulse block h-0.5 w-8 bg-gray-700 dark:bg-white-200"></span>
            </div>
          </div>
          {/* Conditional Hamburger Menu */}
          {expanded && (
            <div className="fixed left-0 top-0 z-10 h-screen w-screen bg-[#20204080]">
              {/* bg-gray-700 */}
              <main className="m-7 flex h-3/6 flex-col gap-5 rounded-[0.65rem] bg-white-100 opacity-100 dark:bg-gray-850">
                <header className="flex w-full flex-row justify-between">
                  <div className="ml-7 mt-4 text-20 font-bold text-blue-600">
                    MORENT
                  </div>
                  <div className="mr-7 mt-4">
                    <button onClick={toggleMenu}>
                      <Image src={close} alt="" />
                    </button>
                  </div>
                </header>

                <div className="m-5 inline-flex flex-col justify-center ">
                  <ul className="">
                    <li
                      className={`flex flex-row rounded ${
                        pathname === "/" ? "bg-blue-600" : ""
                      } p-3`}
                    >
                      {theme === "light" ? (
                        <Image className="h-5 w-5" src={house} alt="" />
                      ) : (
                        <Image src={altHome} alt="" />
                      )}
                      <button
                        className="ml-11 dark:text-white"
                        onClick={() => {
                          router.push("/");
                          setExpanded(false);
                        }}
                      >
                        Home
                      </button>
                    </li>
                    <li
                      className={`flex flex-row rounded ${
                        pathname === "/search" ? "bg-blue-600" : ""
                      } p-3`}
                    >
                      {theme === "light" ? (
                        <Image src={search} alt="" />
                      ) : (
                        <Image src={altSearch} alt="" />
                      )}
                      <button
                        className="ml-11 dark:text-white"
                        onClick={() => {
                          router.push("/search");
                          setExpanded(false);
                        }}
                      >
                        Search
                      </button>
                    </li>
                    <li
                      className={`flex flex-row rounded ${
                        pathname === "/addCar" ? "bg-blue-600" : ""
                      } p-3`}
                    >
                      {theme === "light" ? (
                        <Image src={add} alt="" />
                      ) : (
                        <Image src={altAdd} alt="" />
                      )}
                      <button
                        onClick={() => {
                          router.push("/addCar");
                          setExpanded(false);
                        }}
                        className="ml-11 dark:text-white"
                      >
                        Add Car
                      </button>
                    </li>
                  </ul>
                </div>

                <div className="mx-5 flex items-center justify-center text-center dark:border-none dark:bg-gray-700">
                  {authenticatedUser ? (
                    <div className="flex w-full flex-col gap-2.5">
                      <div
                        className="flex items-center justify-center gap-1.5 rounded-sm border bg-white py-3.5"
                        onClick={() => {
                          router.push("/profile");
                          setExpanded(false);
                        }}
                      >
                        <div className="h-5 w-5">
                          <Image
                            alt="profile-picture"
                            src={authenticatedUser?.userAvatar}
                            className="rounded-full object-contain"
                            width={20}
                            height={20}
                          />
                        </div>
                        <p className="text-sm font-semibold text-blue-500">
                          My Profile
                        </p>
                      </div>
                      <button
                        onClick={navigateToLogout}
                        className="w-full rounded-sm bg-red-400 py-3.5 text-sm text-white"
                      >
                        Logout
                      </button>
                    </div>
                  ) : (
                    <button
                      onClick={navigateToLogin}
                      className=" w-full border bg-white p-2 text-blue-600"
                    >
                      LogIn
                    </button>
                  )}
                </div>
              </main>
            </div>
          )}
        </section>
      </div>
    </nav>
  );
};

export default NavigationBar;
