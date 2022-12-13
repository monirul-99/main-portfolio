import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../Pages/Home/Home";
import HomeCover from "../Pages/Home/HomeCover/HomeCover";
import HomeDevInfo from "../Pages/Home/HomeDevInfo/HomeDevInfo";
import HomeProjects from "../Pages/Home/HomeProjects/HomeProjects";
import ProcessZone from "../Pages/Home/ProcessZone/ProcessZone";
import ShopExInfo from "../Pages/Home/SHOPEXInfo/SHOPEXInfo";
import WeddingInfo from "../Pages/Home/WeddingInfo/WeddingInfo";

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
  {
    path: "/weddingInfo",
    element: <WeddingInfo />,
  },
  {
    path: "/shopexInfo",
    element: <ShopExInfo />,
  },
  {
    path: "/processZone",
    element: <ProcessZone />,
  },
]);
