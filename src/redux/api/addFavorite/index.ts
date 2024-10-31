import { api as index } from "..";
import { ADDFAVORITE } from "./types";
const api = index.injectEndpoints({
  endpoints: (build) => ({
    addFavotites: build.mutation<
      ADDFAVORITE.AddFavoritesResponse,
      ADDFAVORITE.AddFavoritesRequest
    >({
      query: (data) => ({
        url: "/api/product/favorites",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["favorite"],
    }),
    getFavoritesById: build.query<
      ADDFAVORITE.GetFavoritesByIdResponse,
      ADDFAVORITE.GetFavoritesByIdRequest
    >({
      query: (id: string) => ({
        url: `/api/product/get-favorite/${id}`,
        method: "GET",
      }),
      providesTags: ["favorite"],
    }),
  }),
});
export const { useAddFavotitesMutation, useGetFavoritesByIdQuery } = api;
