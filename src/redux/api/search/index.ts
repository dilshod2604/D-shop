import { api as index } from "..";
const api = index.injectEndpoints({
  endpoints: (build) => ({
    searchProducts: build.query<any, string>({
      query: (query) => ({
        url: `/products/?sort=${query}`,
        method: "GET",
      }),
      providesTags: ["product"],
    }),
  }),
});
export const { useSearchProductsQuery } = api;
