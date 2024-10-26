import { api as index } from "..";
import { CART } from "./types";
const api = index.injectEndpoints({
  endpoints: (build) => ({
    addProductToCart: build.mutation<
      CART.AddCartProductResponse,
      CART.AddCartProductRequest
    >({
      query: (data) => ({
        url: `/api/product/cart${data.product_id}`,
        method: "POST",
        body: {
          userId: data.user_id,
          quantity: data.quantity,
        },
      }),
      invalidatesTags: ["cart"],
    }),
  }),
});
export const { useAddProductToCartMutation } = api;
