import { api as index } from "..";
import { AUTH } from "./types";
const api = index.injectEndpoints({
  endpoints: (build) => ({
    signUp: build.mutation<AUTH.GetSignUpResponse, AUTH.GetSignUpRequest>({
      query: (data) => ({
        url: "/api/auth/sign-up",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["auth"],
    }),
    signIn: build.mutation<AUTH.GetSignInResponse, AUTH.GetSignInRequest>({
      query: (data) => ({
        url: "/api/auth/sign-in",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["auth"],
    }),
  }),
});
export const { useSignUpMutation, useSignInMutation } = api;
