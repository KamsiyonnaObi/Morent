import React, {
  CSSProperties,
  ChangeEvent,
  Dispatch,
  SetStateAction,
} from "react";

export interface userToken {
  userId: string;
  iat: number;
}

export interface VehicleCardProps {
  data: any;
  carName: string;
  carType: string;
  carImage?: string;
  carFuel: number;
  carDriver: string;
  carCapacity: number;
  carPrice: number;
  carInfo: string;
  carId?: string;
}

export interface ButtonProps {
  text: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  buttonColor: string;
  textColor: string;
  hPadding?: string;
  hMargin?: string;
  width: string;
  height: string;
  extraStyles?: string;
  name?: string;
}

interface Option {
  value: string;
  label: string;
}

export interface DropdownProps {
  title: string;
  options: Option[];
  width: string;
  height: string;
  style?: CSSProperties;
  onChange: (event: ChangeEvent<HTMLSelectElement>) => void;
}

export interface DropdownwTitleProps {
  toptitle: string;
  title: string;
  options: Option[];
  height: string;
  width: string;
  style?: CSSProperties;
  onChange: (event: ChangeEvent<HTMLSelectElement>) => void;
}

export interface InputProps {
  type: string;
  placeholder: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  width?: string;
  height?: string;
  style?: CSSProperties;
  inputColor: string;
}

export interface InputwTitleProps {
  title: string;
  type: string;
  placeholder: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  width?: string;
  height?: string;
  style?: CSSProperties;
  inputColor: string;
}

export interface OptionSelectProps {
  title: string;
}

export interface StarRatingProps {
  rating: number;
}
export interface sideBarFilterProps {
  id: string;
  name: string;
  filterElements: string[];
  count: number[];
}

export interface RentalSummaryProps {
  title: string;
  carImage: string;
  rating: number;
  review: number;
  subtotal: number;
  tax: number;
}

export interface SearchBarProps {
  version: number;
  dropDownData: any[];
}

export interface FilterProps {
  filterTitle: string;
  filterElements: string[];
}

export interface CarDetailProps {
  data: any;
  carName: string;
  carInfo: string;
  carType: string;
  carImage?: string;
  carFuel: number;
  carDriver: string;
  carCapacity: number;
  carPrice: number;
  carOriginalPrice: number;
  rating: number;
  review: number;
  isRented: boolean;
  carId: string | undefined;
  toggleModal: Dispatch<SetStateAction<boolean>>;
}

export interface PickupDropoffProps {
  toggleModal: Dispatch<SetStateAction<boolean>>;
  carId: string | undefined;
}
