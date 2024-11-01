import { api as index } from "..";
import { SEARCH } from "./types";
const api = index.injectEndpoints({
  endpoints: (build) => ({
    searchProducts: build.query<
      SEARCH.SearchProdctsResponse,
      SEARCH.SearchProdctsRequest
    >({
      query: (query) => `/api/product/search?query=${query}`,
      providesTags: ["search"],
    }),
    searchByCategory: build.query<
      SEARCH.SearchProdctsByCategoryResponse,
      SEARCH.SearchProdctByCategorysRequest
    >({
      query: (query) => `/api/product/category?query=${query}`,
      providesTags: ["search"],
    }),
  }),
});
export const { useSearchProductsQuery, useSearchByCategoryQuery } = api;
0