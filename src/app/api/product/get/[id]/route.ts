import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

interface IProductParams {
  params: {
    id: string;
  };
}

export const GET = async (req: Request, { params }: IProductParams) => {
  try {
    const { id } = params;

    const data = await prisma.product.findUnique({
      where: {
        id:id,
      },
    });
    console.log("Fetching product with ID:", id);

    if (!data) {
      return NextResponse.json({ error: "Product not found" }, { status: 404 });
    }

    return NextResponse.json(data, { status: 200 });
  } catch (error) {
    console.error("Error fetching product:", error);

    return NextResponse.json(
      { error: `Failed to fetch product: ${error}` },
      { status: 500 }
    );
  }
};
