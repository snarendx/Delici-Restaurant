import React from "react";

const MenuSection = () => {
  return (
    <section className="bg-black text-white py-16 relative">
      <div className="container mx-auto text-center">
        <p className="text-yellow-500 text-sm mb-2 tracking-widest">
          FLAVORS FOR ROYALTY
        </p>

        <h2 className="text-4xl font-bold mb-4">We Offer Top Notch</h2>
        <p className="text-gray-400 mb-12 max-w-2xl mx-auto">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry lorem Ipsum has been the industry's standard dummy text ever.
        </p>

        <div className="grid gap-10 sm:grid-cols-1 lg:grid-cols-3 items-center px-6">
          <div className="flex flex-col items-center">
            <div className="relative group">
              <div className="absolute top-0 w-full h-6 bg-black" />
              <img
                src="Image1.jpg"
                alt="Breakfast"
                className="w-full max-w-sm h-72 object-cover rounded-lg mb-4 transition duration-300 ease-in-out group-hover:brightness-75"
              />
            </div>
            <h3 className="text-2xl font-semibold mb-4">Breakfast</h3>
            <button className="bg-transparent text-white px-4 py-2 border border-white rounded-full hover:bg-white hover:text-black transition duration-300">
              View Menu
            </button>
          </div>

          <div className="flex flex-col items-center mt-20">
            <div className="relative group">
              <div className="absolute top-0 w-full h-6 bg-black" />
              <img
                src="Image2.jpg"
                alt="Appetizers"
                className="w-full max-w-sm h-72 object-cover rounded-lg mb-4 transition duration-300 ease-in-out group-hover:brightness-75"
              />
            </div>
            <h3 className="text-2xl font-semibold mb-4"></h3>
            <button className="bg-transparent text-white px-4 py-2 border border-white rounded-full hover:bg-white hover:text-black transition duration-300">
              View Menu
            </button>
          </div>

          <div className="flex flex-col items-center">
            <div className="relative group">
              <div className="absolute top-0 w-full h-6 bg-black" />
              <img
                src="Image3.jpg"
                alt="Drinks"
                className="w-full max-w-sm h-72 object-cover rounded-lg mb-4 transition duration-300 ease-in-out group-hover:brightness-75"
              />
            </div>
            <h3 className="text-2xl font-semibold mb-4">Drinks</h3>
            <button className="bg-transparent text-white px-4 py-2 border border-white rounded-full hover:bg-white hover:text-black transition duration-300">
              View Menu
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MenuSection;
