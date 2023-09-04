import dbConnect from "@/utils/mongooseConnect";
import UserModel from "@/models/User";
import { IUser } from "@/types/mongoose";

export async function GET() {
  try {
    // Connect to the DB
    await dbConnect();

    // Fetch all users
    const users: IUser[] = await UserModel.find();

    // Respond with the list of users
    return new Response(JSON.stringify(users));
  } catch (error) {
    console.error(error);
    return new Response("Something Went Wrong");
  }
}
