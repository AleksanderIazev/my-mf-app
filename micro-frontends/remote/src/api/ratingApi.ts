import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IRatingData } from "../models/models";

export const ratingApi = createApi({
  reducerPath: "ratingApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000/api/" }),
  endpoints: (builder) => ({
    getRatingData: builder.query<IRatingData, void>({
      query: () => "rating",
    }),
  }),
});

export const { useGetRatingDataQuery } = ratingApi;
