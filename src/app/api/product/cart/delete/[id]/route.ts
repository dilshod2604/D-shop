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

    if (!id || !id.trim()) {
      return NextResponse.json({ status: 400, message: "ID is required" });
    }

    const cartItemExist = await prisma.cartItem.findFirst({
      where: {
        id,
      },
    });

    if (!cartItemExist) {
      return NextResponse.json({
        status: 404,
        message: "CartItem not found",
      });
    }

    await prisma.cartItem.delete({
      where: {
        id,
      },
    });
    console.log("params", id);

    return NextResponse.json(
      { message: "CartItem deleted successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error deleting cart item:", error);
    return NextResponse.json({ status: 500, message: "Internal server error" });
  }
};
