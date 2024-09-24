import React, { useState, useEffect } from "react";
import { FaBars } from "react-icons/fa";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";

const Header = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="relative bg-black bg-opacity-20 min-h-screen flex flex-col">
      <video
        className="absolute top-0 left-0 w-full h-full object-cover z-[-1]"
        autoPlay
        loop
        muted
        style={{
          transform: `translateY(${scrollPosition * 0.5}px)`,
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
        }}
      >
        <source src="/FoodVideo.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div>
        <Navbar />
      </div>

      <header className="bg-black bg-opacity-50 flex justify-between items-center h-12 md:h-16 px-4 md:px-6 relative z-10">
        <div
          className="text-white cursor-pointer"
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        >
          <FaBars size={24} />
        </div>

        <div className="flex flex-col items-center">
          <div className="flex items-center">
            <img src="/delici.png" alt="Delici Logo" className="h-8 md:h-12" />
          </div>
        </div>
        <Link to={"/Find-ATable"}>
          <button className="relative inline-block px-6 py-2 md:px-10 md:py-2 text-xs md:text-lg bg-[#E4C590] text-black hover:text-white transition-all duration-500 ease-in border-2 border-[#E4C590] rounded-none shadow-[inset_0_0_0_0_#E4C590] hover:shadow-[inset_0_-100px_0_0_#000000] active:scale-90">
            FIND A TABLE
          </button>
        </Link>

        {isSidebarOpen && (
          <div className="absolute top-0 left-0 w-64 h-screen bg-black bg-opacity-80"></div>
        )}
      </header>

      <div className="w-full h-[75vh] md:h-screen bg-cover bg-center flex justify-center items-center relative text-center text-white z-10">
        <div className="relative z-10 flex flex-col justify-center items-center text-center h-full px-4 md:px-6 py-4">
          <div className="relative">
            <p className="text-xs md:text-sm uppercase text-[#E4C590] tracking-widest mb-28">
              Delightful Experience
              <div className="w-32 mx-auto flex mt-4 items-center justify-center">
                <svg
                  version="1.1"
                  id="Layer_1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  x="0px"
                  y="0px"
                  viewBox="0 0 97.1 12.7"
                  enableBackground="new 0 0 97.1 12.7"
                  xmlSpace="preserve"
                  className="w-full"
                >
                  <rect
                    x="31.6"
                    y="3"
                    transform="matrix(0.7071 0.7071 -0.7071 0.7071 14.7528 -22.8645)"
                    fill="none"
                    stroke="#E3C48E"
                    strokeWidth="0.75"
                    strokeMiterlimit="10"
                    width="6.8"
                    height="6.8"
                  />
                  <rect
                    x="58.7"
                    y="3"
                    transform="matrix(0.7071 0.7071 -0.7071 0.7071 22.699 -42.0484)"
                    fill="none"
                    stroke="#E3C48E"
                    strokeWidth="0.75"
                    strokeMiterlimit="10"
                    width="6.8"
                    height="6.8"
                  />
                  <polygon
                    fill="none"
                    stroke="#E3C48E"
                    strokeWidth="0.75"
                    strokeMiterlimit="10"
                    points="48.6,12.1 39.8,6.4 48.6,0.6 57.3,6.4 
	"
                  />
                  <line
                    fill="none"
                    stroke="#E3C48E"
                    strokeWidth="0.75"
                    strokeMiterlimit="10"
                    x1="3.2"
                    y1="6.4"
                    x2="30.2"
                    y2="6.4"
                  />
                  <circle fill="#E3C48E" cx="2.6" cy="6.4" r="2.5" />
                  <line
                    fill="none"
                    stroke="#E3C48E"
                    strokeWidth="0.75"
                    strokeMiterlimit="10"
                    x1="93.9"
                    y1="6.4"
                    x2="66.9"
                    y2="6.4"
                  />
                  <circle fill="#E3C48E" cx="94.4" cy="6.4" r="2.5" />
                </svg>
              </div>
            </p>

            <h1 className="text-4xl md:text-7xl font-bold mt-16">
              Flavors Inspired by <br />
              the Seasons
            </h1>
            <p className="text-sm md:text-lg mt-4">
              Come with family & feel the joy of mouthwatering food
            </p>
            <button className="relative mt-12 inline-block px-6 py-2 md:px-10 md:py-2 text-xs md:text-lg text-[#E4C590] hover:text-black transition-all duration-500 ease-in border-2 border-[#E4C590] rounded-none shadow-[inset_0_0_0_0_#E4C590] hover:shadow-[inset_0_-100px_0_0_#E4C590] active:scale-90">
              VIEW OUR MENU
            </button>
          </div>
        </div>

        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>
      </div>
    </div>
  );
};

export default Header;
