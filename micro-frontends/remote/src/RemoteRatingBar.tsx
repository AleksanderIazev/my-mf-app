import React from "react";
import { RatingWidgetSidebar } from "./widget/RatingWidgetSidebar";

interface IRemoteRatingBarProps {
  isSidebarOpen?: boolean;
}

export const RemoteRatingBar: React.FC<IRemoteRatingBarProps> = ({
  isSidebarOpen,
}) => {
  return (
    <div>
      <RatingWidgetSidebar isSidebarOpen={isSidebarOpen} />
    </div>
  );
};
