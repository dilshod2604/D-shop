import {
  BaseQueryFn,
  createApi,
  fetchBaseQuery,
} from "@reduxjs/toolkit/query/react";

const BaseQquery = fetchBaseQuery({
  baseUrl: "https://fakestoreapi.com/",
});
const secondBaseQuery = fetchBaseQuery({
  baseUrl: "http://localhost:3000/",
});

const baseQueryWithTwoUrls: BaseQueryFn = async (arg, api, extraOptions) => {
  let result;
  if (arg.url.startsWith("/api/auth")) {
    result = await secondBaseQuery(arg, api, extraOptions);
  } else {
    result = await BaseQquery(arg, api, extraOptions);
  }

  return result;
};

export const api = createApi({
  reducerPath: "api",
  baseQuery: baseQueryWithTwoUrls,
  refetchOnFocus: true,
  refetchOnReconnect: true,
  tagTypes: ["product", "category", "auth"],
  endpoints: () => ({}),
});
