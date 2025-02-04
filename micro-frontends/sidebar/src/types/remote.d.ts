interface IRemoteRatingBarProps {
  isSidebarOpen?: boolean;
}

declare module "reviews/RemoteRatingBar" {
  import { ComponentType } from "react";
  const RemoteRatingBar: ComponentType<IRemoteRatingBarProps>;

  export { RemoteRatingBar };
}
