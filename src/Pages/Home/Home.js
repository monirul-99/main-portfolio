import React from "react";
import HomeCover from "./HomeCover/HomeCover";
import HomeDevInfo from "./HomeDevInfo/HomeDevInfo";
import HomeProjects from "./HomeProjects/HomeProjects";

const Home = () => {
  return (
    <div>
      <HomeCover />
      <HomeDevInfo />
      <HomeProjects />
    </div>
  );
};

export default Home;
