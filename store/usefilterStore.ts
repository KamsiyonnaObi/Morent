import { create } from "zustand";

interface stateFilters {
  Sport: Boolean;
  SUV: Boolean;
  Hatchback: Boolean;
  Sedan: Boolean;
  SuperSport: Boolean;
  Truck: Boolean;
  Classic: Boolean;
  SportBike: Boolean;
  DieselTruck: Boolean;
  c2: Boolean;
  c4: Boolean;
  c5: Boolean;
  c6: Boolean;
  price: string;
  location: string;
  dropOff: Date;
  pickUp: Date;
  searchQuery: string;
  setFilter: (key: keyof stateFilters, setKey: string | Date) => void;
}

export const useFilterState = create<stateFilters>((set) => ({
  Sport: false,
  SUV: false,
  Hatchback: false,
  Sedan: false,
  SuperSport: false,
  Truck: false,
  Classic: false,
  SportBike: false,
  DieselTruck: false,
  c2: false,
  c4: false,
  c5: false,
  c6: false,
  price: "",
  location: "",
  dropOff: new Date(),
  pickUp: new Date(),
  searchQuery: "",

  setFilter: (key: keyof stateFilters, setKey: string | Date) =>
    set((state) => ({
      [key]: setKey,
    })),
}));
