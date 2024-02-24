import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home } from "./pages/Home";
import "./styles/main.scss";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/plans",
    element: <div>Plans</div>
  }
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
