import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import { RemoteContent } from "./RemoteContent";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { store } from "./store/store";
import { RemoteRatingBar } from "./RemoteRatingBar";

const App = () => (
  <div className="container">
    <RemoteContent />
    <RemoteRatingBar />
  </div>
);
const rootElement = document.getElementById("app");

if (!rootElement) throw new Error("Failed to find the root element");

const root = ReactDOM.createRoot(rootElement as HTMLElement);

root.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);
