import { configureStore } from "@reduxjs/toolkit";
import { ratingApi } from "../api/ratingApi";
import { listApi } from "../api/listApi";
import { statisticsApi } from "../api/statisticsApi";

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
