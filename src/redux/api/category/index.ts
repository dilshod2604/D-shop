import { api as index } from "..";
export const api = index.injectEndpoints({
  endpoints: (build) => ({
    getCategories: build.query<any, void>({
      query: () => ({
        url: "/products/categories",
        method: "GET",
      }),
      providesTags: ["category"],
    }),
  }),
});
export const { useGetCategoriesQuery } = api;
