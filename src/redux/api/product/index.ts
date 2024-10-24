import { api as index } from "..";
import { PRODUCT } from "./types";
const api = index.injectEndpoints({
  endpoints: (build) => ({
    createProduc: build.mutation<
      PRODUCT.CreateProductResponse,
      PRODUCT.CreateProductRequest
    >({
      query: (product) => ({
        url: "api/product/create",
        method: "POST",
        body: product,
      }),
      invalidatesTags: ["product"],
    }),
    getProducts: build.query<
      PRODUCT.GetProductResponse,
      PRODUCT.GetProductRequest
    >({
      query: () => ({
        url: "/api/product/get",
        method: "GET",
      }),
      providesTags: ["product"],
    }),

    getProductsById: build.query<
      PRODUCT.GetProductByIdResponse,
      PRODUCT.GetProductByIdRequest
    >({
      query: (product_id) => ({
        url: `/api/product/get/${product_id}`,
        method: "GET",
      }),
      providesTags: ["product"],
    }),
  }),
});
export const {
  useCreateProducMutation,
  useGetProductsQuery,
  useGetProductsByIdQuery,
} = api;
