import React from "react";
import { BsBookmarkStarFill } from "react-icons/bs";

const SpecialDish = () => {
  return (
    <div className="min-h-screen bg-black flex flex-col md:flex-row items-center justify-center">
      <div className="md:w-1/2 w-full">
        <img
          src="/Image2.jpg"
          alt="Special Dish"
          className="object-cover h-full w-full"
        />
      </div>
      
      <div className="text-4xl text-yellow-600 animate-bounce-slow">
        <BsBookmarkStarFill />
      </div>

      <div className="md:w-1/2 w-full px-6 py-8 text-white">
        <div className="mb-4">
          <h2 className="text-gold uppercase tracking-wider text-sm">
            Special Dish
          </h2>

          <h1 className="text-4xl font-bold mt-2">Lobster Tortellini</h1>
          <p className="mt-4 text-gray-400">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
        </div>

        <div className="flex items-center mt-4 space-x-4">
          <span className="line-through text-gray-400">$40.00</span>
          <span className="text-2xl font-bold text-yellow-500 text-gold">
            $20.00
          </span>
        </div>

        <button className="relative mt-12 inline-block px-6 py-2 md:px-10 md:py-2 text-xs md:text-lg  text-[#E4C590] hover:text-black transition-all duration-500 ease-in border-2 border-[#E4C590] rounded-none shadow-[inset_0_0_0_0_#E4C590] hover:shadow-[inset_0_-100px_0_0_#E4C590] active:scale-90">
          VIEW ALL MENU
        </button>
      </div>
    </div>
  );
};

export default SpecialDish;
