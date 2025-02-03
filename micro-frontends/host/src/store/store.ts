import { configureStore } from "@reduxjs/toolkit";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IListData, IRatingData, IStatisticsData } from "../models/models";

export const listApi = createApi({
  reducerPath: "listApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000/api/" }),
  endpoints: (builder) => ({
    getListData: builder.query<IListData, void>({
      query: () => "list",
    }),
  }),
});

export const { useGetListDataQuery } = listApi;

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

export const store = configureStore({
  reducer: {
    [ratingApi.reducerPath]: ratingApi.reducer,
    [listApi.reducerPath]: listApi.reducer,
    [statisticsApi.reducerPath]: statisticsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(ratingApi.middleware)
      .concat(listApi.middleware)
      .concat(statisticsApi.middleware),
});
