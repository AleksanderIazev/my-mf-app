import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IStatisticsData } from "../models/models";

export const statisticsApi = createApi({
  reducerPath: "statisticsApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000/api/" }),
  endpoints: (builder) => ({
    getStatisticsData: builder.query<IStatisticsData, void>({
      query: () => "statistics",
    }),
  }),
});

export const { useGetStatisticsDataQuery } = statisticsApi;
