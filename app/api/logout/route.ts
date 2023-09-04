import { cookies } from "next/headers";

export async function GET() {
  try {
    // Delete the authentication cookie
    cookies().delete("token"); // not sure this works.

    return new Response(
      JSON.stringify({ message: "Successfully logged out" }),
      { status: 200 }
    );
  } catch (error) {
    return new Response(JSON.stringify({ message: "Something Went Wrong" }), {
      status: 500,
    });
  }
}
