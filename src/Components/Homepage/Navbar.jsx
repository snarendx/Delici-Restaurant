import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className="bg-black bg-opacity-50 text-white p-4 md:p-6 flex flex-col space-y-2 md:space-y-4 z-10">
      <div className="flex flex-col md:flex-row justify-between items-center text-xs md:text-sm">
        <div className="flex items-center space-x-2 mb-2 md:mb-0">
          <FaMapMarkerAlt className="mr-1" />
          <span>Restaurant St, Delicious City, London 9578, UK</span>
          <span>Daily: 8:00 am to 10:00 pm</span>
        </div>

        <div className="flex flex-col md:flex-row items-center space-x-0 md:space-x-6 space-y-2 md:space-y-0">
          <div className="flex items-center space-x-2 hover:text-yellow-500 transition-colors">
            <FaPhoneAlt />
            <span>+1 123 456 7890</span>
          </div>
          <div className="flex items-center space-x-2 hover:text-yellow-500 transition-colors">
            <FaEnvelope />
            <span>booking@restaurant.com</span>
          </div>
        </div>
      </div>

      <hr className="border-t border-gray-400" />
    </div>
  );
};

export default Navbar;
