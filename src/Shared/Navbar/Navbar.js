import React from "react";
import { Link } from "react-router-dom";
import { FiLinkedin } from "react-icons/fi";
import {
  IoArrowDownCircleOutline,
  IoLogoGithub,
  IoMailOutline,
} from "react-icons/io5";
import { IconContext } from "react-icons";

const Navbar = () => {
  return (
    <div className="relative z-50">
      <section className="container mx-auto text-white pt-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-28 w-3/5">
            <div>
              <h1 className="text-4xl text-gray-300 font-Ubuntu uppercase">
                ᗰOᑎIᖇᑌᒪ
              </h1>
            </div>
            {/* <div className="flex items-center space-x-5 font-Ubuntu">
              <Link className="text-[15px] capitalize" to="/home">
                Home
              </Link>
              <Link className="text-[15px] capitalize" to="/projects">
                Projects
              </Link>
              <Link className="text-[15px] capitalize" to="/contact">
                Contact Us
              </Link>
            </div> */}
          </div>
          <div className="flex items-center space-x-10">
            {/* <aside className="flex items-center space-x-2">
              <IconContext.Provider value={{ color: "", size: 20 }}>
                <FiLinkedin />
              </IconContext.Provider>
              <p className="mt-1 text-gray-400 font-semibold text-[15px]">
                Linkedin
              </p>
            </aside>
            <aside className="flex items-center space-x-2">
              <IconContext.Provider value={{ color: "", size: 20 }}>
                <IoLogoGithub />
              </IconContext.Provider>
              <p className="text-gray-400 font-semibold text-[15px] mt-0.5">
                GitHub
              </p>
            </aside>
            <aside className="flex items-center">
              <button
                className="border px-2 py-0.5 text-[15px] text-gray-400 rounded font-semibold flex 
              items-center duration-300 ease-in-out hover:rounded-full"
              >
                <p className="-mt-0.5 px-2 p-0.5">Resume</p>

                <IconContext.Provider value={{ color: "white", size: 20 }}>
                  <IoArrowDownCircleOutline />
                </IconContext.Provider>
              </button>
            </aside> */}

            <Link to="/home">
              <span className="text-gray-400 font-semibold text-[15px] tracking-wide">
                home
              </span>
            </Link>
            <Link to="/projects">
              <span className="text-gray-400 font-semibold text-[15px] tracking-wide">
                projects
              </span>
            </Link>
            <Link to="/blogs">
              <span className="text-gray-400 font-semibold text-[15px] tracking-wide">
                Blogs
              </span>
            </Link>
            <Link to="/about">
              <span className="text-gray-400 font-semibold text-[15px] tracking-wide">
                about
              </span>
            </Link>

            <a
              href="https://drive.google.com/file/d/1GcgQK1eYODsiijAn14DwsSsPJ7yJcWix/view?usp=share_link"
              className="text-gray-400 font-semibold text-[15px] tracking-wide outline outline-1 px-2 py-0.5"
              target="_blank"
              rel="noreferrer"
            >
              Resume
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Navbar;
