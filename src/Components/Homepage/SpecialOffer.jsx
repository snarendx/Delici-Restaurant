import React, { useState, useEffect } from "react";

const SpecialOffer = () => {
  const offers = [
    {
      id: 1,
      name: "Tokusen Wagyu",
      description:
        "Tomatoes, green bell pepper, sliced cucumber, onion, olives...",
      price: "$45.00",
      image: "Slide1.jpg",
    },
    {
      id: 2,
      name: "Butternut Pumpkin",
      description:
        "Avocados with crab meat, red onion, crab salad stuffed bell pepper...",
      price: "$15.00",
      image: "Slide2.jpg",
    },
    {
      id: 3,
      name: "Opu Fish",
      description:
        "Vegetables, cheeses, ground meats, tomato sauce, seasonings...",
      price: "$12.00",
      image: "Slide3.jpg",
    },
    {
      id: 4,
      name: "Greek Salad",
      description:
        "Avocados with crab meat, red onion, crab salad, red bell pepper...",
      price: "$39.00",
      image: "Slide4.jpg",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = 4;

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 3000);

    return () => clearInterval(interval);
  }, [currentIndex]);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % offers.length);
  };

  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + offers.length) % offers.length
    );
  };

  const visibleOffers = [
    offers[currentIndex % offers.length],
    offers[(currentIndex + 1) % offers.length],
    offers[(currentIndex + 2) % offers.length],
    offers[(currentIndex + 3) % offers.length],
  ];

  return (
    <section className="bg-black text-white py-12">
      <div className="text-center mb-8">
        <p className="text-[#E4C590] tracking-widest">
          SPECIAL OFFER
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
        </p>
        <h2 className="text-4xl font-bold">Best Specialties</h2>
      </div>

      <div className="flex justify-center items-center space-x-6">
        <button
          className="text-[#E4C590] text-2xl transition-transform duration-300 hover:scale-110"
          onClick={handlePrev}
        >
          &lt;
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2 mt-6 lg:grid-cols-4 gap-8">
          {visibleOffers.map((offer, index) => (
            <div
              key={offer.id}
              className="bg-black p-4 text-center transition-transform duration-500 hover:scale-105"
            >
              <img
                src={offer.image}
                alt={offer.name}
                className={`mx-auto mb-4 transition-transform duration-500 ease-in-out ${
                  index === 0 || index === 2 ? "mt-8" : ""
                }`}
                style={{ opacity: 0.9 }}
              />
              <h3 className="text-xl font-semibold">{offer.name}</h3>
              <p className="text-sm text-gray-400">{offer.description}</p>
              <p className="text-[#E4C590] mt-2">{offer.price}</p>
            </div>
          ))}
        </div>

        <button
          className="text-[#E4C590] text-2xl transition-transform duration-300 hover:scale-110"
          onClick={handleNext}
        >
          &gt;
        </button>
      </div>

      <div className="text-center mt-8">
        <button className="relative mt-12 inline-block px-6 py-2 md:px-10 md:py-2 text-xs md:text-lg text-[#E4C590] hover:text-black transition-all duration-500 ease-in border-2 border-[#E4C590] rounded-none shadow-[inset_0_0_0_0_#E4C590] hover:shadow-[inset_0_-100px_0_0_#E4C590] active:scale-90">
          VIEW ALL MENU
        </button>
      </div>
    </section>
  );
};

export default SpecialOffer;
