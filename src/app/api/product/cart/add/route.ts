import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";
export const POST = async (req: Request) => {
  const { userId, productId, quantity } = await req.json();
  if (!userId || !productId) {
    return NextResponse.json({
      status: 400,
      message: "User ID and Product ID are required",
    });
  }
  try {
    const existingCartItem = await prisma.cartItem.findUnique({
      where: {
        userId_productId: {
          userId,
          productId,
        },
      },
    });
    let cartItem;
    if (existingCartItem) {
      cartItem = await prisma.cartItem.update({
        where: { userId_productId: { userId, productId } },
        data: { quantity: existingCartItem.quantity + (quantity || 1) },
      });
    } else {
      cartItem = await prisma.cartItem.create({
        data: {
          userId,
          productId,
          quantity: quantity || 1,
        },
      });
    }

    return NextResponse.json(cartItem, { status: 200 });
  } catch (error) {
    return NextResponse.json({
      status: 500,
      message: "Failed to add product to cart",
    });
  }
};
