import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export const POST = async (req: Request) => {
  try {
    const { productId, userId } = await req.json();

    const user = await prisma.user.findFirst({
      where: { id: userId },
    });

    if (!user) {
      return NextResponse.json({
        status: 404,
        message: "The user is not found",
      });
    }

    const existingFavorite = await prisma.favoriteProduct.findUnique({
      where: {
        userId_productId: {
          userId,
          productId,
        },
      },
    });

    if (existingFavorite) {
      return NextResponse.json({
        status: 400,
        message: "The product is already added in favorites",
      });
    }

    const addFavorites = await prisma.favoriteProduct.create({
      data: {
        productId,
        userId,
        isFavorite:true
      },
    });

    return NextResponse.json(addFavorites);
  } catch (error) {
    return NextResponse.json({
      status: 500,
      message: "Internal server error",
    });
  }
};
