import mongoose, { Schema, Model } from "mongoose";
import { IUser } from "@/types/mongoose";
import bcrypt from "bcrypt";

const userSchema: Schema = new Schema<IUser>({
  username: {
    type: String,
    unique: true,
    required: true,
    trim: true,
    minlength: 3,
  },
  email: {
    type: String,
    unique: true,
    trim: true,
    required: true,
  },
  password: {
    type: String,
    required: true,
    trim: true,
    minlength: 3,
  },
  fullName: {
    type: String,
    required: true,
    trim: true,
  },
  userTitle: {
    type: String,
    default: "agent",
    trim: true,
  },
  profileImage: {
    type: String,
    default: "/user_images/profilePicture.png",
  },
  bannerImage: {
    type: String,
    default: "/View2.svg", // MAYBE CHANGE LATER
  },
  carsRented: [
    {
      type: Schema.Types.ObjectId,
      ref: "Car",
    },
  ],
  carsForRent: [
    {
      type: Schema.Types.ObjectId,
      ref: "Car",
    },
  ],
  carsFavorite: [
    {
      type: Schema.Types.ObjectId,
      ref: "Car",
    },
  ],
});
userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();
  try {
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
  } catch (err: any) {
    next(err);
  }
});
userSchema.methods.checkPassword = async function (password: string | Buffer) {
  return await bcrypt.compare(password, this.password);
};
const UserModel: Model<IUser> =
  mongoose.models.User || mongoose.model<IUser>("User", userSchema);

export default UserModel;
