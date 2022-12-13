import React from "react";
import { IconContext } from "react-icons";
import { IoEye, IoLogoGithub } from "react-icons/io5";
import Navbar from "../../../Shared/Navbar/Navbar";
import One from "../../Images/New folder (2)/proje1.jpg";
import Two from "../../Images/New folder (2)/project21.jpg";
import Three from "../../Images/New folder (2)/projects3.jpg";

const ShopExInfo = () => {
  return (
    <>
      <Navbar />
      <div className="container mx-auto mt-60">
        <div className="grid grid-cols-12 justify-between">
          <div className="grid col-span-6">
            <div className="carousel w-full">
              <div id="item1" className="carousel-item w-full">
                <img src={One} className="w-[650px] h-[350px]" alt="" />
              </div>
              <div id="item2" className="carousel-item w-full">
                <img src={Two} className="w-[650px] h-[350px]" alt="" />
              </div>
              <div id="item3" className="carousel-item w-full">
                <img src={Three} className="w-[650px] h-[350px]" alt="" />
              </div>
            </div>
            <div className="flex justify-center w-full -ml-16 py-2 gap-2">
              <a href="#item1" className="btn btn-xs">
                1
              </a>
              <a href="#item2" className="btn btn-xs">
                2
              </a>
              <a href="#item3" className="btn btn-xs">
                3
              </a>
            </div>
          </div>
          <div className="grid col-span-6 justify-center">
            <h1 className="text-3xl text-start">SHOP-EX</h1>
            <div className="flex items-center space-x-5">
              <button className="outline h-7 outline-1 px-2 outline-neutral-900 rounded-md flex items-center">
                <IconContext.Provider value={{ color: "", size: 18 }}>
                  <IoEye />
                </IconContext.Provider>
                <span className="px-2">
                  <a
                    href="https://shop-ex-shopping.firebaseapp.com/"
                    target={"_blank"}
                    rel="noreferrer"
                  >
                    Preview
                  </a>
                </span>
              </button>
              <button className="outline h-7 outline-1 px-2 outline-neutral-900 rounded-md flex items-center">
                <IconContext.Provider value={{ color: "", size: 18 }}>
                  <IoLogoGithub />
                </IconContext.Provider>
                <span className="px-2">
                  <a
                    href="https://github.com/monirul-99/shop-EX"
                    target={"_blank"}
                    rel="noreferrer"
                  >
                    GitHub
                  </a>
                </span>
              </button>
            </div>

            <article className="">
              <h2>Features</h2>

              <ul>
                <li>✅MongoDB CRUD Operation</li>
                <li>✅Firebase User Authentication</li>
                <li>✅Valid User Check With JTW Token </li>
                <li>✅User Can Comment add Their Service</li>
                <li>✅User Login Return Re direction</li>
              </ul>

              <h1 className="mt-3">TECHNOLOGY</h1>
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
              </div>
              <div className="flex mb-5  space-x-5">
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
            </article>
          </div>
        </div>
      </div>
    </>
  );
};

export default ShopExInfo;
