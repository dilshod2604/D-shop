import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

interface IDeleteParams {
  params: {
    id: string;
  };
}

export const DELETE = async (req: Request, { params }: IDeleteParams) => {
  try {
    const { id } = params;

    const data = await prisma.product.delete({
      where: {
        id,
      },
    });
    return NextResponse.json(data, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ status: 500, message: "Deleting error" });
  }
};
