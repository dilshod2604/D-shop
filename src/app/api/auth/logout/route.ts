import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export const POST = async () => {
  try {
    const cookieStore = cookies();
    if (cookieStore.has("user_id")) {
      cookieStore.delete("user_id");
    }
    return NextResponse.json({
      status: 200,
      message: "Logged out successfully",
    });
  } catch (error) {
    return NextResponse.json({
      status: 500,
      message: "Error while logging out",
    });
  }
};
