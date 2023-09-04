"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";

export default function Login() {
  const [isSignUp, setIsSignUp] = useState(false);
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    fullName: "",
  });
  const router = useRouter();
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const postUrl = isSignUp ? "/api/users" : "/api/login";

  const handleSubmit = async (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      // create new FormData()
      const newFormData = new FormData();

      // append each value
      newFormData.append("email", formData.email);
      newFormData.append("password", formData.password);

      // append username and fullName only on Sign up
      if (isSignUp) {
        newFormData.append("username", formData.username);
        newFormData.append("fullName", formData.fullName);
      }

      const response = await fetch(postUrl, {
        method: "POST",
        body: newFormData,
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Failed to login");
      }

      const data = await response.json();
      if (data.message === "Successfully logged in") {
        router.push("/");
      }
      return console.log("here", data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            {isSignUp ? "Create your account" : "Log in to your account"}
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" onSubmit={handleSubmit} method="POST">
            {isSignUp && (
              <>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium leading-6 text-gray-900 dark:text-white"
                  >
                    Full Name
                  </label>
                  <div className="mt-2">
                    <input
                      id="fullName"
                      name="fullName"
                      type="fullName"
                      minLength={3}
                      value={formData.fullName}
                      onChange={handleChange}
                      required
                      className="block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-dark-blue sm:pl-4 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="Username"
                    className="block text-sm font-medium leading-6 text-gray-900 dark:text-white"
                  >
                    Username
                  </label>
                  <div className="mt-2">
                    <input
                      id="username"
                      name="username"
                      type="username"
                      minLength={3}
                      value={formData.username}
                      onChange={handleChange}
                      required
                      className="block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-dark-blue sm:pl-4 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
              </>
            )}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900 dark:text-white"
              >
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  autoComplete="email"
                  required
                  className="block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-dark-blue sm:pl-4 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 text-gray-900 dark:text-white"
                >
                  Password
                </label>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  minLength={3}
                  value={formData.password}
                  onChange={handleChange}
                  required
                  className="block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-dark-blue sm:pl-3 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-dark-blue px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-dark-blue dark:text-white"
              >
                {isSignUp ? "Sign up" : "Log in"}
              </button>
            </div>
          </form>
          <p></p>
          <p className="mt-10 text-center text-sm text-gray-500">
            {isSignUp ? "Already have an account?" : "Not a member?"}{" "}
            <a
              href="#"
              className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
              onClick={() => setIsSignUp((prev) => !prev)}
            >
              {isSignUp ? "Log in to your account" : "Create your account"}
            </a>
          </p>
        </div>
      </div>
    </>
  );
}
