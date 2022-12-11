import React from "react";
// import { Link } from "react-router-dom";
import Monirul from "../../Images/IMG_05092.png";
import "./HomeCover.css";
import { TypeAnimation } from "react-type-animation";

const HomeCover = () => {
  return (
    <section>
      <div className="container mx-auto">
        <div className="" id="gradientOverlay">
          <img
            className="-mt-[93px] w-10/12 mx-auto relative -right-80"
            src={Monirul}
            alt="Portfolio-Cover-pic"
          />
          {/* <p id="gradientOverlayBottom"></p> */}
        </div>

        {/* <div className="flex flex-col space-y-5 mt-56">
          <p className="text-white text-xl ml-1">Hi, I'm</p>
          <h1 className="text-white text-6xl font-Raleway font-semibold">
            Monirul Islam
          </h1>

          <TypeAnimation
            sequence={[
              "Web Developer",
              1000,
              "Font End Developer",
              2000,
              "MERN Stack Developer",
              2000,
            ]}
            wrapper="div"
            cursor={true}
            repeat={Infinity}
            style={{
              fontSize: "1.5em",
              color: "white",
              fontFamily: "font-Raleway",
            }}
          />

          <p className="text-gray-400 capitalize">
            A Young <span className="text-red-600">Web Developer</span> with
            crazy for <span className="text-red-600">Full Stack Developer</span>
          </p>
        </div> */}
      </div>
    </section>
  );
};

export default HomeCover;
