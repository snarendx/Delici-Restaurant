import React from "react";

const Reservation = () => {
  return (
    <div className="min-h-screen bg-black flex justify-center items-center py-10">
      <div className="bg-black border text-white max-w-4xl mx-auto p-6 rounded-lg shadow-lg">
        <div className="flex flex-col md:flex-row">
          <div className="w-full md:w-2/3 p-6 bg-black rounded-lg">
            <h2 className="text-3xl font-semibold text-center mb-4">
              Online Reservation
            </h2>
            <p className="text-center mb-6">
              Booking request{" "}
              <span className="text-yellow-500">+88-123-123456</span> or fill
              out the order form
            </p>
            <form>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full p-3 bg-gray-800 rounded focus:outline-none focus:ring-2 focus:ring-yellow-500"
                />
                <input
                  type="text"
                  placeholder="Phone Number"
                  className="w-full p-3 bg-gray-800 rounded focus:outline-none focus:ring-2 focus:ring-yellow-500"
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                <select className="w-full p-3 bg-gray-800 rounded focus:outline-none focus:ring-2 focus:ring-yellow-500">
                  <option>1 Person</option>
                  <option>2 People</option>
                  <option>3 People</option>
                </select>
                <input
                  type="text"
                  placeholder="DD-MM-YYYY"
                  className="w-full p-3 bg-gray-800 rounded focus:outline-none focus:ring-2 focus:ring-yellow-500"
                />
                <select className="w-full p-3 bg-gray-800 rounded focus:outline-none focus:ring-2 focus:ring-yellow-500">
                  <option>08:00 AM</option>
                  <option>09:00 AM</option>
                </select>
              </div>
              <textarea
                placeholder="Message"
                className="w-full p-3 bg-gray-800 rounded mb-4 focus:outline-none focus:ring-2 focus:ring-yellow-500"
              ></textarea>

              <button className="w-full inline-block px-6 py-2 md:px-10 md:py-2 text-xs md:text-lg bg-[#E4C590] text-black hover:text-white transition-all duration-500 ease-in border-2 border-[#E4C590] rounded-none shadow-[inset_0_0_0_0_#E4C590] hover:shadow-[inset_0_-100px_0_0_#000000] active:scale-90">
                FIND A TABLE
              </button>
            </form>
          </div>

          <div className="w-full md:w-1/3 p-6 bg-gray-800 flex flex-col items-center justify-center rounded-lg">
            <h3 className="text-2xl font-semibold mb-4">Contact Us</h3>
            <p className="text-yellow-500 text-2xl font-bold mb-4">
              +88-123-123456
            </p>
            <div className="text-center">
              <p className="mb-2">Restaurant St, Delicious City,</p>
              <p className="mb-2">London 9578, UK</p>
              <div className="mt-4">
                <h4 className="text-lg font-semibold">Lunch Time</h4>
                <p>Monday to Sunday</p>
                <p>11:00 am – 2:30 pm</p>
              </div>
              <div className="mt-4">
                <h4 className="text-lg font-semibold">Dinner Time</h4>
                <p>Monday to Sunday</p>
                <p>05:00 pm – 10:00 pm</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reservation;
