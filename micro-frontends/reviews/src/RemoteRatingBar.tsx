import React from "react";
import { RatingWidgetSidebar } from "./widget/RatingWidgetSidebar";
import { Provider } from "react-redux";
import { store } from "./store/store";

interface IRemoteRatingBarProps {
  isSidebarOpen?: boolean;
}

export const RemoteRatingBar: React.FC<IRemoteRatingBarProps> = ({
  isSidebarOpen,
}) => {
  return (
    <>
      <Provider store={store}>
        <RatingWidgetSidebar isSidebarOpen={isSidebarOpen} />
      </Provider>
    </>
  );
};
