import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

interface DeleteProductParams {
  params: {
    id: string;
  };
}
export const DELETE = async (req: Request, { params }: DeleteProductParams) => {
  try {
    const updatedProduct = await req.json();
    const { id } = params;

    const data = await prisma.product.update({
      where: {
        id: id,
      },
      data: updatedProduct,
    });
    return NextResponse.json(data, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ status: 500, message: "Editin error" });
  }
};
