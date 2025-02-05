import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IListData } from "../models/models";
import { BASE_URL } from "./consts";

export const listApi = createApi({
  reducerPath: "listApi",
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: (builder) => ({
    getListData: builder.query<IListData, void>({
      query: () => "list",
    }),
  }),
});

export const { useGetListDataQuery } = listApi;
