// return the responseObj
import UserModel from "@/models/User";
import jwt from "jsonwebtoken";
import { cookies } from "next/headers";
import { userToken } from "@/types/component";

// create an async GET function
export async function GET() {
  // Get the token from the cookies
  const token = cookies().get("token");

  // return unauthorized if data is unavailable
  if (!token) {
    return new Response(JSON.stringify({ message: "Unauthorized" }), {
      status: 401,
    });
  }
  // jwt.verify the token with secret key (save userId)
  const userId = jwt.verify(
    token?.value,
    process.env.JWT_SECRET || ""
  ) as userToken;

  if (!userId) {
    return new Response(JSON.stringify({ message: "Unauthorized" }), {
      status: 401,
    });
  }

  // findUserById in userModel (save user)
  const user = await UserModel.findById(userId.userId);

  if (!user) {
    return new Response(JSON.stringify({ message: "Unauthorized" }), {
      status: 401,
    });
  }
  // save user in a response Obj
  const responseObj = {
    id: user?._id,
    email: user?.email,
    userTitle: user?.userTitle,
    fullName: user?.username,
    userAvatar: user?.profileImage,
    userBanner: user?.bannerImage,
    favorite: user?.carsFavorite,
  };

  return new Response(JSON.stringify({ message: responseObj }), {
    status: 200,
  });
}
