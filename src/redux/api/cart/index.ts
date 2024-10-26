import { api as index } from "..";
import { CART } from "./types";

const api = index.injectEndpoints({
  endpoints: (build) => ({
    addProductToCart: build.mutation<
      CART.AddCartProductResponse,
      CART.AddCartProductRequest
    >({
      query: (data) => ({
        url: `/api/product/cart/add`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["cart"],
    }),
    getCartProducts: build.query<
      CART.GetCartProductResponse,
      CART.GetCartProductRequest
    >({
      query: (userId) => ({
        url: `/api/product/cart/get?userId=${userId}`,
        method: "GET",
      }),
      providesTags: ["cart"],
    }),
  }),
});

export const { useAddProductToCartMutation, useGetCartProductsQuery } = api;
