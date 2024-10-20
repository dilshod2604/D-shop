import { api as index } from "..";
import { PRODUCT } from "./types";
const api = index.injectEndpoints({
  endpoints: (build) => ({
    getProducts: build.query<
      PRODUCT.GetProductsResponse,
      PRODUCT.GetProductsRequest
    >({
      query: () => ({
        url: "/products",
        method: "GET",
      }),
      providesTags: ["product"],
    }),
    getProductsById: build.query<any, number>({
      query: (id) => ({
        url: `/products/${id}`,
        method: "GET",
      }),
      providesTags: ["product"],
    }),
  }),
});
export const { useGetProductsQuery, useGetProductsByIdQuery } = api;
