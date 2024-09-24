import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const SpecialSelection = () => {
  const [activeCategory, setActiveCategory] = useState("Morning");

  const menuItems = [
    {
      title: "Greek Salad",
      description:
        "Tomatoes, green bell pepper, sliced cucumber onion, olives, and feta cheese.",
      price: "$25.50",
      image: "GeekSalad.png",
    },
    {
      title: "Tokusen Wagyu",
      description:
        "Vegetables, cheeses, ground meats, tomato sauce, seasonings and spices.",
      price: "$39.00",
      image: "TokusenWagyu.png",
      label: "NEW",
    },
    {
      title: "Lasagne",
      description:
        "Vegetables, cheeses, ground meats, tomato sauce, seasonings and spices.",
      price: "$40.00",
      image: "Lasagne.png",
      label: "SEASONAL",
    },
    {
      title: "Olivas Rellenas",
      description:
        "Avocados with crab meat, red onion, crab salad stuffed red bell pepper and green bell pepper.",
      price: "$25.00",
      image: "OlivasRellenas.png",
    },
    {
      title: "Butternut Pumpkin",
      description:
        "Vegetables, cheeses, ground meats, tomato sauce, seasonings and spices.",
      price: "$49.00",
      image: "ButterPumpkin.png",
    },
    {
      title: "Opu Fish",
      description:
        "Vegetables, cheeses, ground meats, tomato sauce, seasonings and spices.",
      price: "$49.00",
      image: "OpuFish.png",
    },
  ];

  const categories = ["Morning", "Weekday Lunch", "Dinner", "Wines"];

  const handleCategoryClick = (event, category) => {
    event.preventDefault();
    setActiveCategory(category);
  };

  const pageVariants = {
    initial: { opacity: 0, y: 50 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -50 },
  };

  return (
    <div
      className="bg-black text-white min-h-screen px-6 py-8 md:px-20 lg:px-32"
      style={{
        backgroundImage: `url('/SpecialDishBackground.png')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <header className="text-center mb-8">
        <h2 className="text-lg  text-[#E4C590] uppercase tracking-widest ">
          Special Selection
          <div className="w-32 mx-auto flex  mt-4 items-center justify-center">
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
        </h2>
        <h1 className="text-4xl font-bold mt-2">Delicious Menu</h1>
        <div className="flex uppercase justify-center gap-8 mt-6">
          {categories.map((category, index) => (
            <a
              key={index}
              href=""
              onClick={(event) => handleCategoryClick(event, category)}
              className={`relative pb-2 ${
                activeCategory === category
                  ? "text-white"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              {category}
              {activeCategory === category && (
                <>
                  <span className="absolute inset-x-0 bottom-[-1px] h-[2px] bg-[#E4C590]"></span>
                  <span className="absolute inset-x-0 bottom-[-4px] h-[2px] bg-[#E4C590]"></span>
                </>
              )}
            </a>
          ))}
        </div>
      </header>

      <AnimatePresence mode="wait">
        <motion.section
          key={activeCategory}
          variants={pageVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={{ duration: 0.5 }}
          className="grid md:grid-cols-2 gap-12 mb-8"
        >
          {menuItems.map((item, index) => (
            <div key={index} className="flex items-start space-x-4">
              <div className="relative w-24 h-24 overflow-hidden rounded">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-300 ease-in-out transform hover:scale-105"
                />
              </div>
              <div className="flex-1">
                <h2 className="text-xl font-semibold">{item.title}</h2>
                <p className="text-gray-400">{item.description}</p>
                <span className="text-green-400 font-bold">{item.price}</span>
                {item.label && (
                  <span className="ml-2 bg-[#E4C590] text-black text-xs px-2 py-1 rounded">
                    {item.label}
                  </span>
                )}
              </div>
            </div>
          ))}
        </motion.section>
      </AnimatePresence>

      <footer className="text-center mt-8 text-gray-400">
        During winter daily from{" "}
        <span className="text-white font-bold">7:00 pm to 9:00 pm</span>
        <div className="mt-4">
          <button className="relative mt-12 inline-block px-6 py-2 md:px-10 md:py-2 text-xs md:text-lg text-[#E4C590] hover:text-black transition-all duration-500 ease-in border-2 border-[#E4C590] rounded-none shadow-[inset_0_0_0_0_#E4C590] hover:shadow-[inset_0_-100px_0_0_#E4C590] active:scale-90">
            VIEW ALL MENU
          </button>
        </div>
      </footer>
    </div>
  );
};

export default SpecialSelection;
