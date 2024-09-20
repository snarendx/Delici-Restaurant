import React from "react";

const OurStory = () => {
  return (
    <div className="min-h-screen bg-black flex text-center items-center justify-center p-8">
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-8 text-white items-center justify-center">
        <div className="flex flex-col justify-center items-center md:items-start space-y-4">
          <p className="text-yellow-500 font-semibold tracking-widest text-center md:text-left">
            OUR STORY
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
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-center md:text-left">
            Every Flavor Tells a Story
          </h1>
          <p className="text-gray-400 text-center md:text-left">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry lorem Ipsum has been the industry's standard dummy text
            ever since the when an unknown printer took a galley of type and
            scrambled it to make a type specimen book.
          </p>
          <p className="font-semibold text-center md:text-left">
            Book Through Call
          </p>
          <p className="relative group text-yellow-500 text-2xl cursor-pointer text-center md:text-left">
            <span className="relative inline-block">
              +80 (400) 123 4567
              <span className="absolute left-0 right-0 bottom-0 h-0.5 bg-yellow-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
              <span className="absolute left-0 right-0 bottom-[-6px] h-0.5 bg-yellow-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
            </span>
          </p>
          <button className="relative mt-12 inline-block px-6 py-2 md:px-10 md:py-2 text-xs md:text-lg text-[#E4C590] hover:text-black transition-all duration-500 ease-in border-2 border-[#E4C590] rounded-none shadow-[inset_0_0_0_0_#E4C590] hover:shadow-[inset_0_-100px_0_0_#E4C590] active:scale-90">
            READ MORE
          </button>
        </div>

        <div className="relative group flex justify-center items-center">
          <img
            src="/OurStory.jpg"
            alt="Restaurant Interior"
            className="w-full h-96 object-cover rounded-md transition-transform duration-500 ease-in-out transform group-hover:translate-x-2 group-hover:-translate-y-2"
          />
          <div className="absolute bottom-0 left-0 transform translate-y-10 md:translate-y-20 transition-transform duration-500 ease-in-out group-hover:translate-x-1 group-hover:translate-y-1">
            <img
              src="/OurStory2Small.jpg"
              alt="Chef preparing dish"
              className="w-48 h-48 object-cover rounded-md shadow-lg transition-transform duration-500 ease-in-out transform group-hover:translate-x-2 group-hover:-translate-y-2"
            />
          </div>
          <div className="absolute top-0 right-0 transform translate-x-5">
            <div className="w-24 h-24 bg-yellow-500 rounded-full flex items-center justify-center text-black">
              <p className="text-center font-semibold">Since 1950</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurStory;
