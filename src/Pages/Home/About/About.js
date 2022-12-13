import React from "react";
import { IconContext } from "react-icons";
import { FiLinkedin, FiTwitter } from "react-icons/fi";
import { IoLogoGithub } from "react-icons/io5";
import Navbar from "../../../Shared/Navbar/Navbar";

const About = () => {
  return (
    <>
      <Navbar />
      <div className="container mx-auto mt-48 w-1/2">
        <div className="flex justify-center items-center">
          {/* <p className="w-16 h-0.5 bg-white"></p>
          <h1 className="text-5xl font-extralight font-Ubuntu px-7">hello</h1> */}

          <div>
            <h1 className="font-semibold text-2xl text-white mb-5">
              {" "}
              Monirul Islam
            </h1>
            <p className="mb-5">
              My name's Monirul Islam. I want to work with a team that will help
              me grow faster. I believe my skills and little experience will
              help me solve problems and create value for the team as well as
              for the business.
            </p>

            <p>
              Having spent the past 6 Months plus at programming. My extensive
              experience with designing and developing websites using HTML, CSS,
              Bootstrap, Tailwind, JavaScript , ES6, ReactJs, Node Js, JWT,
              MongoDb CRUD, Express, Firebase matches well with your
              requirements. I have not only learned but also developed some
              projects.
            </p>

            <h2 className="text-3xl uppercase text-white font-Babes tracking-widest mt-5">
              Skills
            </h2>

            <div className="flex space-x-5 mb-5 mt-5">
              <p className="text-[14px] bg-[#EDEEEF] px-3 rounded-md py-0.5 text-black">
                React JS
              </p>
              <p className="text-[14px] bg-[#EDEEEF] px-3 rounded-md py-0.5 text-black">
                React Router
              </p>
              <p className="text-[14px] bg-[#EDEEEF] px-3 rounded-md py-0.5 text-black">
                JavaScript
              </p>
              <p className="text-[14px] bg-[#EDEEEF] px-3 rounded-md py-0.5 text-black">
                Node JS
              </p>

              <p className="text-[14px] bg-[#EDEEEF] px-3 rounded-md py-0.5 text-black">
                Express JS
              </p>
              <p className="text-[14px] bg-[#EDEEEF] px-3 rounded-md py-0.5 text-black">
                MongoDB
              </p>
              <p className="text-[14px] bg-[#EDEEEF] px-3 rounded-md py-0.5 text-black">
                Firebase
              </p>
            </div>

            <h1 className="tracking-widest font-Babes text-white text-2xl border-b border-white pb-5">
              Connect Me
            </h1>

            <div className="flex space-x-5 mt-5">
              <a
                href="https://www.linkedin.com/in/monirul-islam99/"
                target="_blank"
                rel="noreferrer"
              >
                <div className=" flex justify-center items-center">
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
                <div className=" flex justify-center items-center">
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
                <div className=" flex justify-center items-center">
                  <IconContext.Provider value={{ color: "white", size: 18 }}>
                    <FiTwitter />
                  </IconContext.Provider>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
