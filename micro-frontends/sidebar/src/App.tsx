import React from "react";
import ReactDOM from "react-dom/client";

import "./index.scss";
import { RemoteSidebar } from "./RemoteSidebar";
import { BrowserRouter } from "react-router-dom";

const App = () => (
  <div className="container">
    <RemoteSidebar />
  </div>
);
const rootElement = document.getElementById("app");
if (!rootElement) throw new Error("Failed to find the root element");

const root = ReactDOM.createRoot(rootElement as HTMLElement);

root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
