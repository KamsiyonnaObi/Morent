"use client";
import { useFilterState } from "@/store/usefilterStore";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function FilterStateUpdater() {
  // Import useRouter from next
  // use Router to push Query to searchParams
  // page.tsx fetches car data using searchParams
  // this file will update searchParams and the page will auto refetch
  const router = useRouter();
  const {
    Sport,
    SUV,
    Hatchback,
    Sedan,
    Classic,
    DieselTruck,
    SportBike,
    SuperSport,
    Truck,
    c2,
    c4,
    c5,
    c6,
    price,
    location,
    pickUp,
    dropOff,
    searchQuery,
  } = useFilterState();

  useEffect(() => {
    const types = [];
    if (Sport) types.push("Sport");
    if (Hatchback) types.push("Hatchback");
    if (SUV) types.push("SUV");
    if (Sedan) types.push("Sedan");
    if (Classic) types.push("Classic");
    if (DieselTruck) types.push("Diesel Truck");
    if (SportBike) types.push("Sport Bike");
    if (SuperSport) types.push("Super Sport");
    if (Truck) types.push("Truck");

    const capacity = [];

    if (c2) capacity.push("2");
    if (c4) capacity.push("4");
    if (c5) capacity.push("5");
    if (c6) capacity.push("6");

    let url = `search/?`;
    if (types.length > 0) url += `&types=${types.join(",")}`;
    if (capacity.length > 0) url += `&capacity=${capacity.join(",")}`;
    if (location.length > 0) url += `&location=${location}`;
    if (price.length > 0) url += `&price=${price}`;
    if (pickUp !== new Date()) url += `&pickUp=${pickUp.toUTCString()}`;
    if (searchQuery) url += `&search=${searchQuery}`;
    router.push(url);
  }, [
    Sport,
    SUV,
    Hatchback,
    Sedan,
    Classic,
    DieselTruck,
    SportBike,
    SuperSport,
    Truck,
    c2,
    c4,
    c5,
    c6,
    price,
    location,
    pickUp,
    dropOff,
    searchQuery,
    router,
  ]);
  return <></>;
}
