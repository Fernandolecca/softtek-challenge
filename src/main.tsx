import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home } from "./pages/Home";
import { Plans } from "./pages/Plans";
import "./styles/main.scss";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/plans",
    element: <Plans />
  }
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
