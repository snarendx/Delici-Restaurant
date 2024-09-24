import React from "react";
import { FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer
      className="relative text-white py-12"
      style={{
        backgroundImage: `url('/Footer.jpg')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>

      <div className="relative z-10 flex flex-col items-center"></div>

      <div className="relative z-10 container mx-auto flex flex-col lg:flex-row justify-between items-center">
        <div className="flex flex-col items-center justify-center lg:items-start space-y-4 lg:space-y-6 text-gray-300">
          <a href="#" className="relative group hover:text-white">
            HOME
            <div className="absolute inset-x-0 bottom-0 h-[0.5px] bg-yellow-800 transition-all duration-300 transform scale-x-0 group-hover:scale-x-100" />
            <div className="absolute inset-x-0 bottom-1 h-[0.5px] bg-yellow-800 transition-all duration-300 transform scale-x-0 group-hover:scale-x-100" />
          </a>
          <a href="#" className="relative group hover:text-white">
            MENUS
            <div className="absolute inset-x-0 bottom-0 h-[0.5px] bg-yellow-800 transition-all duration-300 transform scale-x-0 group-hover:scale-x-100" />
            <div className="absolute inset-x-0 bottom-1 h-[0.5px] bg-yellow-800 transition-all duration-300 transform scale-x-0 group-hover:scale-x-100" />
          </a>
          <a href="#" className="relative group hover:text-white">
            ABOUT US
            <div className="absolute inset-x-0 bottom-0 h-[0.5px] bg-yellow-800 transition-all duration-300 transform scale-x-0 group-hover:scale-x-100" />
            <div className="absolute inset-x-0 bottom-1 h-[0.5px] bg-yellow-800 transition-all duration-300 transform scale-x-0 group-hover:scale-x-100" />
          </a>
          <a href="#" className="relative group hover:text-white">
            OUR CHEFS
            <div className="absolute inset-x-0 bottom-0 h-[0.5px] bg-yellow-800 transition-all duration-300 transform scale-x-0 group-hover:scale-x-100" />
            <div className="absolute inset-x-0 bottom-1 h-[0.5px] bg-yellow-800 transition-all duration-300 transform scale-x-0 group-hover:scale-x-100" />
          </a>
          <a href="#" className="relative group  hover:text-white">
            CONTACT
            <div className="absolute inset-x-0 bottom-0 h-[0.5px] bg-yellow-800 transition-all duration-300 transform scale-x-0 group-hover:scale-x-100" />
            <div className="absolute inset-x-0 bottom-1 h-[0.5px] bg-yellow-800 transition-all duration-300 transform scale-x-0 group-hover:scale-x-100" />
          </a>
        </div>

        <div
          className="relative z-10 p-12  flex flex-col items-center text-center space-y-4 my-8 lg:my-0 lg:px-12"
          style={{
            backgroundImage: `url('/Table-Book-Background.png')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="flex items-center">
            <img src="/delici.png" alt="Delici Logo" className="h-8 md:h-12" />
          </div>
          <p>Restaurant St, Delicious City, London 9578, UK</p>
          <span className="hover:text-[#E4C590]">
            <p>booking@domainname.com</p>
          </span>
          <span className="hover:text-[#E4C590]">
            {" "}
            <p>Booking Request: +88-123-123456</p>
          </span>{" "}
          <p>Open: 09:00 am - 01:00 pm</p>
          <div className="space-y-2">
            <h2 className="text-4xl mt-8 font-bold">Get News & Offers</h2>
            <p>Subscribe us & Get 25% Off.</p>

            <div className="flex items-center space-x-0">
              <div className="relative">
                <FaEnvelope className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />{" "}
                <input
                  type="email"
                  placeholder="Your email"
                  className="pl-10 p-3 rounded bg-gray-800 text-white border border-gray-600"
                />
              </div>

              <button className="relative flex items-center justify-center text-center px-6 py-2 md:px-10 md:py-2 text-xs md:text-lg bg-[#E4C590] text-black hover:text-white transition-all duration-500 ease-in border-2 border-[#E4C590] rounded-none shadow-[inset_0_0_0_0_#E4C590] hover:shadow-[inset_0_-100px_0_0_#000000] active:scale-90">
                SUBSCRIBE
              </button>
            </div>
          </div>
        </div>

        <aside className="relative z-10 flex flex-col items-center lg:items-end space-y-4 lg:space-y-6 text-gray-300">
          <a href="#" className="relative group  hover:text-white">
            FACEBOOK
            <div className="absolute inset-x-0 bottom-0 h-[0.5px] bg-yellow-800 transition-all duration-300 transform scale-x-0 group-hover:scale-x-100" />
            <div className="absolute inset-x-0 bottom-1 h-[0.5px] bg-yellow-800 transition-all duration-300 transform scale-x-0 group-hover:scale-x-100" />
          </a>
          <a href="#" className="relative group hover:text-white">
            INSTAGRAM
            <div className="absolute inset-x-0 bottom-0 h-[0.5px] bg-yellow-800 transition-all duration-300 transform scale-x-0 group-hover:scale-x-100" />
            <div className="absolute inset-x-0 bottom-1 h-[0.5px] bg-yellow-800 transition-all duration-300 transform scale-x-0 group-hover:scale-x-100" />
          </a>
          <a href="#" className="relative group  hover:text-white">
            TWITTER
            <div className="absolute inset-x-0 bottom-0 h-[0.5px] bg-yellow-800 transition-all duration-300 transform scale-x-0 group-hover:scale-x-100" />
            <div className="absolute inset-x-0 bottom-1 h-[0.5px] bg-yellow-800 transition-all duration-300 transform scale-x-0 group-hover:scale-x-100" />
          </a>
          <a href="#" className="relative group  hover:text-white">
            YOUTUBE
            <div className="absolute inset-x-0 bottom-0 h-[0.5px] bg-yellow-800 transition-all duration-300 transform scale-x-0 group-hover:scale-x-100" />
            <div className="absolute inset-x-0 bottom-1 h-[0.5px] bg-yellow-800 transition-all duration-300 transform scale-x-0 group-hover:scale-x-100" />
          </a>
          <a href="#" className="relative group  hover:text-white">
            GOOGLE MAP
            <div className="absolute inset-x-0 bottom-0 h-[0.5px] bg-yellow-800 transition-all duration-300 transform scale-x-0 group-hover:scale-x-100" />
            <div className="absolute inset-x-0 bottom-1 h-[0.5px] bg-yellow-800 transition-all duration-300 transform scale-x-0 group-hover:scale-x-100" />
          </a>
        </aside>
      </div>

      <div className="relative z-10 text-center text-gray-400 mt-12">
        <p>
          © 2022 Restaurt. All Rights Reserved | Crafted by{" "}
          <span className="text-[#E4C590] underline ">Kalanidhi Themes</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
