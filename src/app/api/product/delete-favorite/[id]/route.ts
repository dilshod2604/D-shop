import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

interface IDeleteProductParams {
  params: {
    id: string;
  };
}

export const DELETE = async (
  req: Request,
  { params }: IDeleteProductParams
) => {
  try {
    const { id } = params;
    console.log("fdghsjdk;fnbh", id);
    if (!id) {
      return NextResponse.json(
        {
          message: "The productId is required!",
        },
        { status: 400 }
      );
    }

    const favoriteExist = await prisma.favoriteProduct.findFirst({
      where: {
        id: id,
      },
    });

    if (!favoriteExist) {
      return NextResponse.json(
        {
          message: "Favorite not found",
        },
        { status: 404 }
      );
    }

    const deleteFavorite = await prisma.favoriteProduct.delete({
      where: {
        id: id,
      },
    });

    return NextResponse.json(deleteFavorite, { status: 200 });
  } catch (error) {
    console.log("Error deleting product:", error);
    return NextResponse.json(
      {
        message: "Internal server error",
      },
      { status: 500 }
    );
  }
};
