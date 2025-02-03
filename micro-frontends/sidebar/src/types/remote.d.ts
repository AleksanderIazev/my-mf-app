interface IRemoteRatingBarProps {
  isSidebarOpen?: boolean;
}

declare module "remote/RemoteRatingBar" {
  import { ComponentType } from "react";
  const RemoteRatingBar: ComponentType<IRemoteRatingBarProps>;

  export { RemoteRatingBar };
}
