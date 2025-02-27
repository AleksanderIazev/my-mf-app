import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import { WarningIcon } from "./icons/WarningIcon";
import { BrowserRouter } from "react-router-dom";
import "./index.scss";

const RemoteRatingWidget = React.lazy(() =>
  import("reviews/RemoteRatingWidget")
    .then((module) => ({
      default: module.RemoteRatingWidget,
    }))
    .catch((error) => {
      console.error("Ошибка загрузки виджета", error);
      return {
        default: () => (
          <div className="box-error">Виджет не загружен. Сервис отключен.</div>
        ),
      };
    })
);

const RemoteSidebar = React.lazy(() =>
  import("sidebar/RemoteSidebar")
    .then((module) => ({
      default: module.RemoteSidebar,
    }))
    .catch((error) => {
      console.error("Ошибка загрузки виджета", error);
      return {
        default: () => (
          <div className="sidebar-error">
            <div className="sidebar-error-inner">
              <WarningIcon />
              <p>Сервис не доступен</p>
            </div>
          </div>
        ),
      };
    })
);
const App = () => (
  <>
    <div className="container">
      <Suspense fallback={<div className="skeleton-widget" />}>
        <RemoteRatingWidget />
      </Suspense>
    </div>
    <Suspense fallback={<div>...Load</div>}>
      <RemoteSidebar />
    </Suspense>
  </>
);

const rootElement = document.getElementById("app");
if (!rootElement) throw new Error("Failed to find the root element");

const root = ReactDOM.createRoot(rootElement as HTMLElement);
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
