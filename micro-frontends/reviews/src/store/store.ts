import { configureStore } from "@reduxjs/toolkit";
import { ratingApi } from "../api/ratingApi";
import { listApi } from "../api/listApi";
import { statisticsApi } from "../api/statisticsApi";
import { waitingApi } from "../api/waitingApi";
import { mineApi } from "../api/mineApi";

export const store = configureStore({
  reducer: {
    [ratingApi.reducerPath]: ratingApi.reducer,
    [listApi.reducerPath]: listApi.reducer,
    [statisticsApi.reducerPath]: statisticsApi.reducer,
    [waitingApi.reducerPath]: waitingApi.reducer,
    [mineApi.reducerPath]: mineApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(ratingApi.middleware)
      .concat(listApi.middleware)
      .concat(statisticsApi.middleware)
      .concat(waitingApi.middleware)
      .concat(mineApi.middleware),
});
