import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IStatisticsData } from "../models/models";
import { BASE_URL } from "./consts";

export const statisticsApi = createApi({
  reducerPath: "statisticsApi",
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: (builder) => ({
    getStatisticsData: builder.query<IStatisticsData, void>({
      query: () => "statistics",
    }),
  }),
});

export const { useGetStatisticsDataQuery } = statisticsApi;
