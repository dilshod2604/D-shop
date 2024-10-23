import bcrypt from "bcrypt";
import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export const POST = async (req: Request) => {
  try {
    const { email, password } = await req.json();

    const user = await prisma.user.findUnique({
      where: {
        email,
      },
    });
    if (!user) {
      return NextResponse.json(
        { error: "Invalid credentials" },
        { status: 401 }
      );
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return NextResponse.json(
        { error: "Invalid credentials" },
        { status: 401 }
      );
    }

    const response = NextResponse.json(user, { status: 200 });
    response.cookies.set("user_id", `${user.id}`, {
      path: "/",
      maxAge: 24 * 60 * 60 * 7,
      httpOnly: true,
      secure: process.env.NODE_ENV === "production", 
      sameSite: "lax", 
    });

    return response;
  } catch (error) {
    return NextResponse.json({ error: "Method not allowed" }, { status: 405 });
  }
};
