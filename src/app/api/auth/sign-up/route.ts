import { prisma } from "@/lib/prisma";
import { supabase } from "@/lib/supabaseClient";
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
    //check user
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
    //upload photo
    // const { data: uploadData, error: uploadError } = await supabase.storage
    //   .from("avatars")
    //   .upload(`public/${Date.now()}_${photo.name}`, photo);

    // if (uploadError) {
    //   return NextResponse.json({
    //     status: 500,
    //     message: "Error uploading photo",
    //   });
    // }
    // //generate photo url
    // const photoUrl = `${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/avatars/${uploadData?.path}`;

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
