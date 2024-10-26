import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";
import { URL } from "url"; 

export const GET = async (req: Request) => {
  const url = new URL(req.url);
  const userId = url.searchParams.get("userId");

  if (!userId) {
    return NextResponse.json({ status: 400, message: "User ID is required" });
  }

  try {
    const cartItems = await prisma.cartItem.findMany({
      where: { userId: Number(userId) },
      include: { product: true },
    });
    return NextResponse.json(cartItems, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json({
      status: 500,
      message: "Failed to fetch cart items",
    });
  }
};

