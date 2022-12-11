import React from "react";
// import { Link } from "react-router-dom";
import Monirul from "../../Images/IMG_05093.png";
import "./HomeCover.css";
import { TypeAnimation } from "react-type-animation";
import { IconContext } from "react-icons";
import { FiLinkedin, FiTwitter } from "react-icons/fi";
import { IoLogoGithub } from "react-icons/io5";
import Navbar from "../../../Shared/Navbar/Navbar";

const HomeCover = () => {
  return (
    <>
      <Navbar />
      <section>
        <div className="container mx-auto">
          <div className="" id="gradientOverlay">
            <img
              className="-mt-[93px] w-10/12 mx-auto relative -right-80"
              src={Monirul}
              alt="Portfolio-Cover-pic"
            />
          </div>

          <div className="absolute top-28">
            <div className="flex flex-col space-y-5 mt-56">
              <div className="flex items-center space-x-3">
                <p className="w-10 h-[1px] mt-1 bg-white"></p>
                <p className="text-white text-2xl">introduce</p>
              </div>
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
                  fontSize: "2em",
                  color: "white",
                }}
              />

              <p className="text-gray-400 capitalize">
                A Young <span className="text-red-600">Web Developer</span> with
                crazy for{" "}
                <span className="text-red-600">Full Stack Developer</span>
              </p>
            </div>

            <div>
              <h1 className="text-gray-300 mt-24 capitalize font-Ubuntu font-light tracking-widest">
                Hire Me Now
              </h1>
              <p className="inline-block border-b  w-full border-blue-300"></p>
              <div className="flex space-x-5 mt-4">
                <a
                  href="https://www.linkedin.com/in/monirul-islam99/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className="ring-2 ring-blue-300 rounded-full w-8 h-8 flex justify-center items-center">
                    <IconContext.Provider value={{ color: "white", size: 18 }}>
                      <FiLinkedin />
                    </IconContext.Provider>
                  </div>
                </a>

                <a
                  href="https://github.com/monirul-99"
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className="ring-2 ring-blue-300 rounded-full w-8 h-8 flex justify-center items-center">
                    <IconContext.Provider value={{ color: "white", size: 18 }}>
                      <IoLogoGithub />
                    </IconContext.Provider>
                  </div>
                </a>

                <a
                  href="https://twitter.com/MsMonirul"
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className="ring-2 ring-blue-300 rounded-full w-8 h-8 flex justify-center items-center">
                    <IconContext.Provider value={{ color: "white", size: 18 }}>
                      <FiTwitter />
                    </IconContext.Provider>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomeCover;
