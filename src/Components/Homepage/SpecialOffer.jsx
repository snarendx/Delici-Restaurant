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
    }, 3000); // Increase interval for smoother transition

    return () => clearInterval(interval);
  }, [currentIndex]);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % offers.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + offers.length) % offers.length);
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
        <p className="text-yellow-400 tracking-widest">SPECIAL OFFER</p>
        <h2 className="text-4xl font-bold">Best Specialties</h2>
      </div>

      <div className="flex justify-center items-center space-x-6">
        <button className="text-yellow-400 text-2xl transition-transform duration-300 hover:scale-110" onClick={handlePrev}>
          &lt;
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2 mt-6 lg:grid-cols-4 gap-8">
          {visibleOffers.map((offer, index) => (
            <div key={offer.id} className="bg-black p-4 text-center transition-transform duration-500 hover:scale-105">
              <img
                src={offer.image}
                alt={offer.name}
                className={`mx-auto mb-4 transition-transform duration-500 ease-in-out ${index === 0 || index === 2 ? 'mt-8' : ''}`}
                style={{ opacity: 0.9 }}
              />
              <h3 className="text-xl font-semibold">{offer.name}</h3>
              <p className="text-sm text-gray-400">{offer.description}</p>
              <p className="text-yellow-400 mt-2">{offer.price}</p>
            </div>
          ))}
        </div>

        <button className="text-yellow-400 text-2xl transition-transform duration-300 hover:scale-110" onClick={handleNext}>
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
