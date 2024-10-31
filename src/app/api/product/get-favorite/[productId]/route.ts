import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

interface IGetFavorite {
  params: {
    productId: string;
  };
}

export const GET = async (req: Request, { params }: IGetFavorite) => {
  const { productId } = params;

  if (!productId) {
    return NextResponse.json({ status: 400, message: "productId is required" });
  }
  try {
    const data = await prisma.favoriteProduct.findFirst({
      where: {
        productId,
      },
    });

    if (!data) {
      return NextResponse.json({
        status: 404,
        message: "Favorite not found",
      });
    }

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({
      status: 500,
      message: "Server error occurred",
    });
  }
};
