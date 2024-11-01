import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export const GET = async (req: Request) => {
  try {
    const { searchParams } = new URL(req.url);
    const query = searchParams.get("query");
    console.log("query", query);

    if (!query) {
      return NextResponse.json({
        status: 400,
        message: "Query parameter is required",
      });
    }

    const products = await prisma.product.findMany({
      where: {
        category: {
          contains: query,
          mode: "insensitive",
        },
      },
      select: {
        id: true,
        name: true,
        views: true,
        rating: true,
        price: true,
        category: true,
        imageUrl: true,
      },
    });
    return NextResponse.json(products, {
      status: 200,
    });
  } catch (error) {
    console.log("error", error);
    return NextResponse.json({ status: 500, message: "Internal server error" });
  }
};
