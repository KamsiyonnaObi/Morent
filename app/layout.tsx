/* eslint-disable camelcase */

import "./globals.css";
import type { Metadata } from "next";
import React from "react";
import { Plus_Jakarta_Sans } from "next/font/google";
import ThemeProvider from "@/providers/ThemeProvider";
import NavigationBar from "@/components/NavigationBar";
import Footer from "@/components/Footer";
import UserAuth from "@/components/UserAuth";
import ToastProvider from "@/providers/ToastProvider";

const JakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Car Rent",
  description: "Team Breaking Bugs - CarRent Application",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={JakartaSans.className}>
        <ThemeProvider>
          <div className={`bg-white-200 dark:bg-gray-900`}>
            <UserAuth />
            <ToastProvider />
            <NavigationBar />
            {children}
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
