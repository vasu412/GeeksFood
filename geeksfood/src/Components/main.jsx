import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./../index.css";
import Component from "./quotes.jsx";
import Body from "./body.jsx";
import Sec from "./section1.jsx";
import Section from "./section2.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: (
          <>
            <Sec />
            <Body />
            <Section />
          </>
        ),
      },
      {
        path: "/quote",
        element: <Component />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
