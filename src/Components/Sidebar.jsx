import React from "react";

const Sidebar = () => {
  return (
    <div className="min-h-screen w-64 bg-black text-white flex flex-col justify-between p-6">
      <div className="flex flex-col items-center">
        <div className="flex items-center">
          <img src="/delici.png" alt="Delici Logo" className="h-8 md:h-12" />
        </div>
      </div>

      <div className="flex-grow mt-8">
        <ul className="space-y-4">
          <li className="flex justify-between items-center">
            <span>HOME</span>
            <span>&gt;</span>
          </li>
          <li className="flex justify-between items-center">
            <span>MENUS</span>
            <span>&gt;</span>
          </li>
          <li className="flex justify-between items-center">
            <span>ABOUT US</span>
          </li>
          <li className="flex justify-between items-center">
            <span>OUR CHEFS</span>
          </li>
          <li className="flex justify-between items-center">
            <span>PAGES</span>
            <span>&gt;</span>
          </li>
          <li>CONTACT</li>
        </ul>
      </div>

      <div>
        <h3 className="text-center text-lg font-bold">Visit Us</h3>
        <p className="text-center text-sm mt-2">
          Restaurant St, Delicious City, London 9578, UK
        </p>
        <p className="text-center text-sm">Open: 9:30 am - 2:30 pm</p>
        <p className="text-center text-sm">booking@domainname.com</p>

        <div className="mt-4 text-center">
          <h4 className="font-bold">Booking Request</h4>
          <p className="text-2xl text-gold">+88-123-123456</p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
