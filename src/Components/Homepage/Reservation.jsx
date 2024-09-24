import React from "react";
import { FaUser, FaCalendarAlt, FaClock } from "react-icons/fa";

const Reservation = () => {
  return (
    <div className="relative bg-[#171819] flex justify-center -mt-4 items-center">
      <div className="bg-[#171819] text-white max-w-4xl mx-auto relative">
        <div className="flex flex-col px-50 w-[1100px] -ml-20 -mt-[150px] md:flex-row relative z-10">
          <div className="w-full md:w-2/3 p-6 flex flex-col gap-4 bg-black">
            <h2 className="text-6xl font-thin text-center mt-10">
              Online Reservation
            </h2>
            <p className="text-center mb-6">
              Booking request{" "}
              <span className="text-[#E4C590]">+88-123-123456</span> or fill out
              the order form
            </p>
            <form className="px-10 py-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full p-3 pl-10 bg-gray-900 rounded focus:outline-none focus:ring-2 focus:ring-[#E4C590]"
                  />
                </div>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Phone Number"
                    className="w-full p-3 pl-10 bg-gray-900 rounded focus:outline-none focus:ring-2 focus:ring-[#E4C590]"
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                <div className="relative flex items-center">
                  <FaUser className="absolute left-3 text-gray-400" />
                  <select className="w-full p-4 pl-10 bg-gray-900 rounded focus:outline-none focus:ring-2 focus:ring-[#E4C590] text-gray-200">
                    <option>1 Person</option>
                    <option>2 People</option>
                    <option>3 People</option>
                  </select>
                </div>
                <div className="relative flex items-center">
                  <FaCalendarAlt className="absolute left-3 text-gray-400" />
                  <input
                    type="text"
                    placeholder="DD-MM-YYYY"
                    className="w-full  p-3 pl-10 bg-gray-900 rounded focus:outline-none focus:ring-2 focus:ring-[#E4C590] text-gray-200"
                  />
                </div>
                <div className="relative flex items-center">
                  <FaClock className="absolute left-3 text-gray-400" />
                  <select className="w-full p-4 pl-10 bg-gray-900 rounded focus:outline-none focus:ring-2 focus:ring-[#E4C590] text-gray-200">
                    <option>08:00 AM</option>
                    <option>09:00 AM</option>
                  </select>
                </div>
              </div>

              <div className="relative">
                <textarea
                  placeholder="Message"
                  className="w-full h-[200px] p-3 pl-10 bg-gray-900 rounded mb-4 focus:outline-none focus:ring-2 focus:ring-[#E4C590]"
                ></textarea>
              </div>

              <button className="w-full inline-block px-6 py-2 md:px-10 md:py-2 text-xs md:text-lg bg-[#E4C590] text-black hover:text-white transition-all duration-500 ease-in border-2 border-[#E4C590] rounded-none shadow-[inset_0_0_0_0_#E4C590] hover:shadow-[inset_0_-100px_0_0_#000000] active:scale-90">
                FIND A TABLE
              </button>
            </form>
          </div>

          <div
            className="w-full max-h-full md:w-1/3 p-6 bg-black flex flex-col items-center justify-center"
            style={{
              backgroundImage: `url('/Table-Book-Background.png')`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          >
            <h3 className="text-6xl font-thin mb-4">Contact Us</h3>
            <p className="text-white font-bold mb-4">Booking Request</p>
            <p className="text-[#E4C590] text-2xl font-bold mb-4">
              +88-123-123456
            </p>
            <div className="text-center text-[#A7A7A7]">
              <div className="text-white">Location</div>

              <p className="mb-2">Restaurant St, Delicious City,</p>
              <p className="mb-2">London 9578, UK</p>
              <div className="mt-4">
                <h4 className="text-lg text-white font-semibold">Lunch Time</h4>
                <p>Monday to Sunday</p>
                <p>11:00 am – 2:30 pm</p>
              </div>
              <div className="mt-4">
                <h4 className="text-lg text-white font-semibold">
                  Dinner Time
                </h4>
                <p>Monday to Sunday</p>
                <p>05:00 pm – 10:00 pm</p>
              </div>
            </div>
          </div>
        </div>

        <div className="relative ml-[800px] -mt-[100px] w-[300px] -right-[190px] ">
          <img
            src="Online-Registration-bg.png"
            alt="Online Registration"
            className=""
          />
        </div>
      </div>
    </div>
  );
};

export default Reservation;
