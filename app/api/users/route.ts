import dbConnect from "@/utils/mongooseConnect";
import UserModel from "@/models/User";

export async function POST(request: Request) {
  const formData = await request.formData();

  const email = formData.get("email");
  const username = formData.get("username");
  const password = formData.get("password");
  const fullName = formData.get("fullName");
  try {
    // connect to DB
    await dbConnect();

    // check if user with the same email exists
    const existingUser = await UserModel.findOne({ email });

    // check if user with the same username exists
    const existingUserByUsername = await UserModel.findOne({ username });

    if (!existingUser || !existingUserByUsername) {
      await UserModel.create({
        email,
        password,
        username,
        fullName,
      });
      return new Response(JSON.stringify({ message: "User Created" }), {
        status: 200,
      });
    }
    return new Response(JSON.stringify({ message: "User already exists" }), {
      status: 400,
    });
  } catch (error) {
    return new Response(JSON.stringify({ message: error }), {
      status: 500,
    });
  }
}
