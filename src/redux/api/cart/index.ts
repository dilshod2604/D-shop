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
    deleteCartItem: build.mutation<
      CART.deleteCartItemResponse,
      CART.deleteCartItemRequest
    >({
      query: (id) => {
        if (id === undefined) {
          throw new Error("ID is required to delete cart item");
        }
        return {
          url: `/api/product/cart/delete/${id}`,
          method: "DELETE",
        };
      },
      // invalidatesTags: ["cart"],
      async onQueryStarted(id, { dispatch, queryFulfilled }) {
        if (id === undefined) return;

        const patchResult = dispatch(
          api.util.updateQueryData("getCartProducts", undefined!, (draft) => {
            return draft.filter((item) => item.id !== id);
          })
        );

        try {
          await queryFulfilled;
        } catch {
          patchResult.undo();
        }
      },
    }),
  }),
});

export const {
  useAddProductToCartMutation,
  useGetCartProductsQuery,
  useDeleteCartItemMutation,
} = api;
