"use client";
import {
  useAddFavotitesMutation,
  useGetFavoritesByIdQuery,
} from "@/redux/api/addFavorite";
import { useGetMeQuery } from "@/redux/api/auth";
import { message } from "antd";
import React, { FC } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";
interface AddFavoritesProps {
  productId: string;
}
const AddFavorites: FC<AddFavoritesProps> = ({ productId }) => {
  const { data: favoriteProduct } = useGetFavoritesByIdQuery(productId);
  const [addFavorite] = useAddFavotitesMutation();
  const { data: me } = useGetMeQuery();
  const addProdcutToFavorite = async () => {
    try {
      const data = {
        productId,
        userId: me?.id!,
      };
      await addFavorite(data);
      message.success("The pruduct is added to favorites");
    } catch (error) {
      console.log(error);
      message.error("Error while adding to Favorite");
    }
  };

  return (
    <div>
      {favoriteProduct?.isFavorite ? (
        <FaHeart
          size={40}
          className="text-red-500 border border-neutral-800 border-1 rounded-md p-2  hover:text-red-500 hover:border-red  -500 hover:scale-110 transition"
          onClick={addProdcutToFavorite}
        />
      ) : (
        <FaRegHeart
          size={40}
          className="text-black border border-neutral-800 border-1 rounded-md p-2  hover:text-blue-500 hover:border-blue-500 hover:scale-110 transition"
          onClick={addProdcutToFavorite}
        />
      )}
    </div>
  );
};

export default AddFavorites;
