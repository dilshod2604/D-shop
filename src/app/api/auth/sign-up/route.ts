import { prisma } from "@/lib/prisma";
import bcrypt from "bcrypt";
import { NextResponse } from "next/server";
interface SignupRequest {
  name: string;
  email: string;
  password: string;
  photo: string;
}

export const POST = async (request: Request) => {
  try {
    const { name, email, password, photo } = await request.json();

    const hashedPassword = await bcrypt.hash(password, 10);

    const existingUser = await prisma.user.findUnique({
      where: {
        email: email,
      },
    });

    if (existingUser) {
      return NextResponse.json({
        status: 409,
        message: "This user already exists",
      });
    }

    const data = await prisma.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
        photo,
      },
    });

    return NextResponse.json(data, { status: 201 });
  } catch (error) {
    return NextResponse.json({
      status: 500,
      message: "An error occurred while creating the user",
    });
  }
};
