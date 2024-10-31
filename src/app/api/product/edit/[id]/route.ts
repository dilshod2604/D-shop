import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

interface IEditParams {
  params: {
    id: string;
  };
}

export const PUT = async (req: Request, { params }: IEditParams) => {
  const { id } = params;

  try {
    const product = await req.json();

    const updatedProduct = await prisma.product.update({
      where: {
        id,
      },
      data: product,
    });

    return NextResponse.json(updatedProduct, { status: 200 });
  } catch (error) {
    console.error("Error updating product:", error);
    return NextResponse.json({
      status: 500,
      message: "Failed to update product",
    });
  }
};
