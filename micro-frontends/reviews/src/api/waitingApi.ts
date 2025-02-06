import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IWaitingData } from "../models/models";
import { BASE_URL } from "./consts";

export const waitingApi = createApi({
  reducerPath: "waitingApi",
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: (builder) => ({
    getWaitingData: builder.query<IWaitingData, void>({
      query: () => "waiting-list",
    }),
  }),
});

export const { useGetWaitingDataQuery } = waitingApi;
