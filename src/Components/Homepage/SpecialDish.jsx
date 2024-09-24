import React from "react";
import { BsBookmarkStarFill } from "react-icons/bs";

const SpecialDish = () => {
  return (
    <div className="min-h-screen bg-black flex flex-col sm:flex-row items-center justify-center text-center">
      <div className="md:w-1/2 w-full flex justify-center">
        <img
          src="/Image2.jpg"
          alt="Special Dish"
          className="object-cover h-full w-full rounded-lg"
        />
      </div>

      <div className="text-4xl p-4 sm:p-8 text-[#E4C590] flex justify-center items-center animate-bounce-slow">
        <BsBookmarkStarFill className="ml-2 sm:ml-8" />
      </div>

      <div className="md:w-1/2 w-full px-4 sm:px-6 py-8 text-white flex flex-col items-center">
        <div className="mb-4">
          <h2 className="text-[#E4C590] uppercase tracking-wider text-sm">
            Special Dish
          </h2>
          <div className="mb-4">
            <div className="w-24 mt-2 mx-auto">
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
                  points="48.6,12.1 39.8,6.4 48.6,0.6 57.3,6.4"
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
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold mt-2">
            Lobster Tortellini
          </h1>
          <p className="mt-4 text-white text-sm sm:text-base text-center">
            Lorem Ipsum is simply dummy text of the printing and <br />
            typesetting industry. Lorem Ipsum has been the industry's <br />
            standard dummy text ever since when an unknown <br />
            printer took a galley of type.
          </p>
        </div>

        <div className="flex items-center mt-4 space-x-4 justify-center">
          <span className="line-through text-gray-400 text-sm sm:text-base">
            $40.00
          </span>
          <span className="text-xl sm:text-2xl font-bold text-[#E4C590] text-gold">
            $20.00
          </span>
        </div>

        <button className="relative mt-12 inline-block px-6 py-2 md:px-10 md:py-2 text-xs md:text-lg text-[#E4C590] hover:text-black transition-all duration-500 ease-in border-2 border-[#E4C590] rounded-none shadow-[inset_0_0_0_0_#E4C590] hover:shadow-[inset_0_-100px_0_0_#E4C590] active:scale-90">
          VIEW ALL MENU
        </button>
      </div>
    </div>
  );
};

export default SpecialDish;
