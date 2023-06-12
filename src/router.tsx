import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import MainPage from "./Pages/MainPage/MainPage";
import Dasboard from "./Pages/Dashboard/Dasboard";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <MainPage/>,
    },
    {
      path: "/dashboard",
      element:<Dasboard/>,
    },
  ]);