import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";

import LandingPage from "./components/LandingPage";
import App from "./App";
import NotFound from "./components/NotFound";
import SpashScreen from "./components/SplashScreen";

import "./scss/style.scss";

const router = createBrowserRouter([
  {
    path: "/",
    element: <SpashScreen />,
  },
  {
    path: "/LandingPage",
    element: <LandingPage />,
  },
  {
    path: "/Home",
    element: <App />,
    loader: async () => {
      const [dogs, user] = await Promise.all([
        fetch("http://localhost:4000/dogs").then((res) => res.json()),
        fetch("http://localhost:4000/user").then((res) => res.json()),
      ]);

      return { dogs, user };
    },
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

const root = document.getElementById("root");
ReactDOM.createRoot(root).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
