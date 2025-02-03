import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IListData } from "../models/models";

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
