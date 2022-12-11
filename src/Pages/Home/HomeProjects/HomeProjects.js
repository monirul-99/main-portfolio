import React from "react";
import { IconContext } from "react-icons";
import { IoLogoGithub, IoEye } from "react-icons/io5";
import Navbar from "../../../Shared/Navbar/Navbar";
import One from "../../Images/projects1.png";
import two from "../../Images/projects2.png";
import three from "../../Images/projects3.png";
import "./HomeProjects.css";

const HomeProjects = () => {
  return (
    <>
      <Navbar />
      <div className="container mx-auto mt-16">
        <h1 className="text-2xl text-white">Latest Projects</h1>

        <div className="grid grid-cols-12 gap-20 mt-10 w-[85%] mx-auto">
          <article className="grid col-span-4 bg-white rounded-xl overflow-hidden text-black">
            <div>
              <img className="" src={One} alt="" />
            </div>
            <div>
              <h1 className="font-semibold text-xl px-4 mt-3">
                Wedding Colors
              </h1>
              <h4 className="px-4">Photography Service For Wedding</h4>

              <div className="flex justify-around mb-5 mt-5 px-2">
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
              </div>
              <div className="flex mb-5 px-3 space-x-3">
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

              <div className="flex space-x-5 mb-5 px-4">
                <button className="outline h-7 outline-1 px-2 outline-neutral-900 rounded-md flex items-center">
                  <IconContext.Provider value={{ color: "", size: 18 }}>
                    <IoEye />
                  </IconContext.Provider>
                  <span className="px-2">Preview</span>
                </button>
                <button className="outline h-7 outline-1 px-2 outline-neutral-900 rounded-md flex items-center">
                  <IconContext.Provider value={{ color: "", size: 18 }}>
                    <IoLogoGithub />
                  </IconContext.Provider>
                  <span className="px-2">GitHub</span>
                </button>
              </div>
            </div>
          </article>
          <article className="grid col-span-4 bg-white rounded-xl overflow-hidden text-black">
            <div>
              <img className=" " src={two} alt="" />
            </div>
            <div>
              <h1 className="font-semibold text-xl px-4 mt-3">Shop EX</h1>
              <h4 className="px-4">E-Commerce Service Page</h4>

              <div className="flex justify-around mb-5 mt-5 px-2">
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
              </div>
              <div className="flex mb-5 px-3 space-x-3">
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

              <div className="flex space-x-5 mb-5 px-4">
                <button className="outline h-7 outline-1 px-2 outline-neutral-900 rounded-md flex items-center">
                  <IconContext.Provider value={{ color: "", size: 18 }}>
                    <IoEye />
                  </IconContext.Provider>
                  <span className="px-2">Preview</span>
                </button>
                <button className="outline h-7 outline-1 px-2 outline-neutral-900 rounded-md flex items-center">
                  <IconContext.Provider value={{ color: "", size: 18 }}>
                    <IoLogoGithub />
                  </IconContext.Provider>
                  <span className="px-2">GitHub</span>
                </button>
              </div>
            </div>
          </article>
          <article className="grid col-span-4 bg-white rounded-xl overflow-hidden text-black">
            <div>
              <img className="" src={three} alt="" />
            </div>
            <div>
              <h1 className="font-semibold text-xl px-4 mt-3">Process Zone</h1>
              <h4 className="px-4">Learning Platform Of Digital Skill</h4>

              <div className="flex justify-around mb-5 mt-5 px-2">
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
              </div>
              <div className="flex mb-5 px-3 space-x-3">
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

              <div className="flex space-x-5 mb-5 px-4">
                <button className="outline h-7 outline-1 px-2 outline-neutral-900 rounded-md flex items-center">
                  <IconContext.Provider value={{ color: "", size: 18 }}>
                    <IoEye />
                  </IconContext.Provider>
                  <span className="px-2">Preview</span>
                </button>
                <button className="outline h-7 outline-1 px-2 outline-neutral-900 rounded-md flex items-center">
                  <IconContext.Provider value={{ color: "", size: 18 }}>
                    <IoLogoGithub />
                  </IconContext.Provider>
                  <span className="px-2">GitHub</span>
                </button>
              </div>
            </div>
          </article>
        </div>
      </div>
    </>
  );
};

export default HomeProjects;
