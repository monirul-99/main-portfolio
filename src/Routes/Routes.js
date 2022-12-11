import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../Pages/Home/Home";
import HomeCover from "../Pages/Home/HomeCover/HomeCover";
import HomeDevInfo from "../Pages/Home/HomeDevInfo/HomeDevInfo";
import HomeProjects from "../Pages/Home/HomeProjects/HomeProjects";

export const Router = createBrowserRouter([
  {
    path: "/",
    element: <HomeCover />,
  },
  {
    path: "/home",
    element: <HomeCover />,
  },
  {
    path: "/projects",
    element: <HomeProjects />,
  },
  {
    path: "/contact",
    element: <HomeDevInfo />,
  },
]);
