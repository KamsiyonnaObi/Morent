import mongoose, { Schema, Model } from "mongoose";
import { ICar } from "@/types/mongoose";

const carSchema = new Schema<ICar>({
  cartitle: {
    type: String,
    required: true,
    trim: true,
    minlength: 3,
  },
  cartype: {
    type: String,
    required: true,
    trim: true,
    minlength: 3,
  },
  rentprice: {
    type: Number,
    required: true,
    trim: true,
    minlength: 1,
  },
  capacity: {
    type: Number,
    required: true,
    trim: true,
    minlength: 1,
  },
  transmission: {
    type: String,
    required: true,
    trim: true,
    minlength: 3,
  },
  location: {
    type: String,
    required: true,
    trim: true,
    minlength: 3,
  },
  fuelcapacity: {
    type: Number,
    required: true,
    trim: true,
    minlength: 3,
  },
  description: {
    type: String,
    required: true,
    trim: true,
    minlength: 3,
  },
  image: {
    type: String,
    required: true,
    trim: true,
    minlength: 3,
  },
  renter: {
    type: Schema.Types.ObjectId,
    ref: "User",
    sparse: true,
  },
  dropOff: {
    type: Date,
    default: Date.now(),
  },
  likeCount: {
    type: Number,
    default: 0,
  },
});

const CarModel: Model<ICar> =
  mongoose.models.Car || mongoose.model<ICar>("Car", carSchema);

export default CarModel;
