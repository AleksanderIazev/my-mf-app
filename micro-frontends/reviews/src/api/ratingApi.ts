import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IRatingData } from "../models/models";
import { BASE_URL } from "./consts";

export const ratingApi = createApi({
  reducerPath: "ratingApi",
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: (builder) => ({
    getRatingData: builder.query<IRatingData, void>({
      query: () => "rating",
    }),
  }),
});

export const { useGetRatingDataQuery } = ratingApi;
