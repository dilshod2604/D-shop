import { prisma } from "@/lib/prisma";
import { IProduct } from "@/types/sheme";
import { NextResponse } from "next/server";

export const POST = async (req: Request) => {
  try {
    const product: IProduct = await req.json();

    const data = await prisma.product.create({
      data: {
        name: product.name,
        price: product.price,
        imageUrl: product.imageUrl,
        rating: product.rating,
        category: product.category,
        views: product.views, 
      },
    });

    return NextResponse.json(data, {
      status: 201,
    });
  } catch (error) {
    console.error("Error creating product:", error);
    return NextResponse.json({
      status: 500,
      message: `Internal Server Error: ${error}`,
    });
  }
};
