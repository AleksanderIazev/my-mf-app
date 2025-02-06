import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IMineListData } from "../models/models";
import { BASE_URL } from "./consts";

export const mineApi = createApi({
  reducerPath: "mineApi",
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: (builder) => ({
    getMineListData: builder.query<IMineListData, void>({
      query: () => "mine-list",
    }),
  }),
});

export const { useGetMineListDataQuery } = mineApi;
