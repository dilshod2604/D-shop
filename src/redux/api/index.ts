import {
  BaseQueryFn,
  createApi,
  fetchBaseQuery,
} from "@reduxjs/toolkit/query/react";

const BaseQquery = fetchBaseQuery({
  baseUrl: process.env.API_URL,
});

const baseQueryExtends: BaseQueryFn = async (arg, api, extraOptions) => {
  const result = await BaseQquery(arg, api, extraOptions);
  return result;
};
export const api = createApi({
  reducerPath: "api",
  baseQuery: baseQueryExtends,
  refetchOnFocus: true,
  refetchOnReconnect: true,
  tagTypes: ["product"],
  endpoints: () => ({}),
});
