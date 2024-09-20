import React from "react";
import { FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-12">
      <div className="flex flex-col items-center">
        <div className="flex items-center">
          <img src="/delici.png" alt="Delici Logo" className="h-8 md:h-12" />
          <span className="ml-2 text-white text-xl md:text-2xl font-bold">
            DELICI <br />
            <span className="text-[#E4C590] text-[16px] md:text-[20px]">
              RESTAURANT
            </span>
          </span>
        </div>
      </div>
      <div className="container mx-auto flex flex-col lg:flex-row justify-between items-center">
        <nav className="flex flex-col items-center lg:items-start space-y-4 lg:space-y-6 text-gray-300 lg:border-r border-gray-700 lg:pr-12">
          <a href="#" className="hover:text-white">
            HOME
          </a>
          <a href="#" className="hover:text-white">
            MENUS
          </a>
          <a href="#" className="hover:text-white">
            ABOUT US
          </a>
          <a href="#" className="hover:text-white">
            OUR CHEFS
          </a>
          <a href="#" className="hover:text-white">
            CONTACT
          </a>
        </nav>

        <div className="flex flex-col items-center text-center space-y-4 my-8 lg:my-0 lg:px-12">
          <p>Restaurant St, Delicious City, London 9578, UK</p>
          <p>booking@domainname.com</p>
          <p>Booking Request: +88-123-123456</p>
          <p>Open: 09:00 am - 01:00 pm</p>

          <div className="space-y-2">
            <h2 className="text-4xl mt-8 font-bold">Get News & Offers</h2>
            <p>Subscribe us & Get 25% Off.</p>
            <div className="flex items-center space-x-2">
              <input
                type="email"
                placeholder="Your email"
                className="p-2 rounded bg-gray-800 text-white"
              />
              <button className="flex items-center p-2 bg-yellow-600 rounded text-black hover:bg-yellow-700">
                <FaEnvelope className="mr-2" />
                SUBSCRIBE
              </button>
            </div>
          </div>
        </div>

        <aside className="flex flex-col items-center lg:items-end space-y-4 lg:space-y-6 text-gray-300">
          <a href="#" className="hover:text-white">
            FACEBOOK
          </a>
          <a href="#" className="hover:text-white">
            INSTAGRAM
          </a>
          <a href="#" className="hover:text-white">
            TWITTER
          </a>
          <a href="#" className="hover:text-white">
            YOUTUBE
          </a>
          <a href="#" className="hover:text-white">
            GOOGLE MAP
          </a>
        </aside>
      </div>

      <div className="text-center text-gray-400 mt-12">
        <p>
          © 2022 Restaurt. All Rights Reserved | Crafted by{" "}
          <span className="text-yellow-800">Kalanidhi Themes</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
