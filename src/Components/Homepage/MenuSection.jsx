import React from "react";

const MenuSection = () => {
  return (
    <section
      className="bg-black text-white py-16 relative"
      style={{
        backgroundImage: `url('/MenuSection-bg.png')`,
        backgroundSize: "500px",
        backgroundPosition: "top right",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="container mx-auto text-center">
        <p className="text-[#E4C590] text-sm mb-2 tracking-widest">
          FLAVORS FOR ROYALTY
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

        <h2 className="text-4xl font-bold mb-4">We Offer Top Notch</h2>
        <p className="text-gray-400 mb-12 max-w-2xl mx-auto">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry lorem Ipsum has been the industry's standard dummy text ever.
        </p>

        <div className="grid gap-10 sm:grid-cols-1 lg:grid-cols-3 items-center px-6">
          <div className="flex flex-col items-center">
            <div className="relative">
              <div className="absolute top-0 w-full h-6 bg-black" />
              <img
                src="Image1.jpg"
                alt="Breakfast"
                className="w-full max-w-sm h-72 object-cover rounded-lg mb-4"
              />
            </div>
            <h3 className="text-2xl font-semibold mb-4">Breakfast</h3>
            <button className="text-white px-4 py-2 rounded-full">
              View Menu
            </button>
          </div>

          <div className="flex flex-col items-center mt-20">
            <div className="relative">
              <div className="absolute top-0 w-full h-6 bg-black" />
              <img
                src="Image2.jpg"
                alt="Appetizers"
                className="w-full max-w-sm h-72 object-cover rounded-lg mb-4"
              />
            </div>
            <h3 className="text-2xl font-semibold mb-4">Appetizers</h3>
            <button className="text-white px-4 py-2">View Menu</button>
          </div>

          <div className="flex flex-col items-center">
            <div className="relative">
              <div className="absolute top-0 w-full h-6 bg-black" />
              <img
                src="Image3.jpg"
                alt="Drinks"
                className="w-full max-w-sm h-72 object-cover rounded-lg mb-4"
              />
            </div>
            <h3 className="text-2xl font-semibold mb-4">Drinks</h3>
            <button className="bg-transparent text-white px-4 py-2">
              View Menu
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MenuSection;
