import React from "react";
import ReactDOM from "react-dom/client";
import App, { appLoader } from "./App.jsx";
import ErrorPage from "./routes/ErrorPage/ErrorPage.jsx";
import About from "./routes/About/About.jsx";
import Contacts from "./routes/Contacts/Contacts.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import DefaultLayout from "./Layouts/DefaultLayout/DefaultLayout.jsx";

import Movie from "./routes/Movie/Movie.jsx";
import { movieLoader } from "./routes/Movie/Movie.jsx";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <DefaultLayout />,
    errorElement: <ErrorPage />,
    children: [
      { path: "/", element: <App />, loader: appLoader },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "contacts",
        element: <Contacts />,
      },
      { path: "catalogo/:id", element: <Movie />, loader: movieLoader },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
