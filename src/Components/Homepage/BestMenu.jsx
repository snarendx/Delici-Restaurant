import React from "react";

const BestMenu = () => {
  return (
    <div className="relative bg-black text-white">
      {/* Add the background pattern */}
      <div
        className="absolute inset-y-0 left-0 w-16 bg-[url('/path-to-your-pattern.svg')] bg-repeat"
        style={{ backgroundSize: 'contain' }}
      />
      <div
        className="absolute inset-y-0 right-0 w-16 bg-[url('/path-to-your-pattern.svg')] bg-repeat"
        style={{ backgroundSize: 'contain' }}
      />

      <div className="mx-auto p-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="flex flex-col justify-center items-center text-center p-8">
          <h3 className="text-yellow-500 text-sm uppercase mb-2">Best Menu</h3>
          <h2 className="text-2xl font-semibold mb-4">
            Special Dishes
            <p className="text-sm text-gray-400 mb-6">
              Lorem Ipsum is simply dummy printing.
            </p>
            <button className="text-yellow-500 px-4 py-2 rounded">
              View Menu
            </button>
            <img src="Image1.jpg" alt="" />
          </h2>
        </div>

        <div className="relative">
          <img
            src="Image3.jpg"
            alt="Upcoming Events"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-x-0 bottom-0 bg-black bg-opacity-50 flex flex-col justify-end items-center text-center p-8">
            <h3 className="text-yellow-500 text-sm uppercase mb-2">Latest</h3>
            <h2 className="text-2xl font-semibold">Upcoming Events</h2>
            <p className="text-sm text-gray-400 mb-6">
              Simply dummy printing and setting.
            </p>
            <button className="text-yellow-600 font-bold px-4 py-2 rounded">
              Join Event
            </button>
          </div>
        </div>

        <div className="flex flex-col justify-center items-center text-center p-8">
          <h3 className="text-yellow-500 text-sm uppercase mb-2">Selected</h3>
          <div className="text-2xl font-semibold mb-4">
            Chef Choice
            <p className="text-sm text-gray-400 mb-6">
              Dummy printing lorem Ipsum simply.
            </p>
            <button className="text-yellow-500 px-4 py-2 rounded">
              View Menu
            </button>
            <img src="Image3.jpg" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BestMenu;
