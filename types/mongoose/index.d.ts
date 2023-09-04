import { Schema } from "mongoose";

export interface IUser {
  _id: Schema.Types.ObjectId;
  username: string;
  email: string;
  password: string;
  carsRented: Schema.Types.ObjectId[];
  carsForRent: Schema.Types.ObjectId[];
  carsFavorite: Schema.Types.ObjectId[];
  profileImage: string;
  bannerImage: string;
  fullName: string;
  userTitle: string;
  checkPassword: (password: string | Buffer) => Promise<boolean>;
}

export interface ICar {
  cartitle: string;
  cartype: string;
  rentprice: number;
  capacity: number;
  transmission: string;
  location: string;
  fuelcapacity: number;
  description: string;
  image: string;
  renter: Schema.Types.ObjectId;
  dropOff: Date;
  likeCount: number;
}

export interface IRecCar {
  likeCount: number;
  cartitle: string;
  cartype: string;
  rentprice: number;
  capacity: number;
  transmission: string;
  location: string;
  fuelcapacity: number;
  description: string;
  image: string;
  renter: Schema.Types.ObjectId;
  likeCount: number;
}
