import React from "react";
import { RatingWidget } from "./widget/RatingWidget";
import { Provider } from "react-redux";
import { store } from "./store/store";

export const RemoteRatingWidget = () => {
  return (
    <>
      <Provider store={store}>
        <RatingWidget />
      </Provider>
    </>
  );
};
