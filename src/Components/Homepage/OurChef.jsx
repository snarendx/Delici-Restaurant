import React from "react";
import { FaFacebook, FaTwitter, FaLinkedin, FaGlobe } from "react-icons/fa";

const chefs = [
  {
    name: "Willium Joe",
    title: "Master Chef",
    image: "Willium Joe.jpg",
  },
  {
    name: "Steave Den",
    title: "Master Chef",
    image: "Steave Den.jpg",
  },
  {
    name: "Lily Sopy",
    title: "Master Chef",
    image: "Lily Sopy.jpg",
  },
];

const OurChef = ({ name, title, image }) => {
  return (
    <div className="relative group max-w-xs mx-auto bg-black text-white rounded-lg overflow-hidden shadow-lg">
      <div className="relative">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover transition-opacity duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900 to-transparent opacity-0 group-hover:opacity-80 transition-opacity duration-500"></div>
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <div className="flex space-x-4 transform group-hover:translate-x-6 transition-transform duration-500">
            <a href="#" className="text-white hover:text-gray-500">
              <FaFacebook size={24} />
            </a>
            <a href="#" className="text-white hover:text-gray-500">
              <FaTwitter size={24} />
            </a>
            <a href="#" className="text-white hover:text-gray-500">
              <FaGlobe size={24} />
            </a>
            <a href="#" className="text-white hover:text-gray-500">
              <FaLinkedin size={24} />
            </a>
          </div>
        </div>
      </div>
      <div className="p-4">
        <h3 className="text-lg font-bold">{name}</h3>
        <p className="text-sm text-yellow-800 mb-4">{title}</p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum,
          doloribus.
        </p>
      </div>
    </div>
  );
};

function ExperiencedTeam() {
  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center p-4">
      <h1 className="text-4xl font-bold text-white mb-10">Meet Our Chefs</h1>
      <div className="flex flex-wrap gap-8 justify-center">
        {chefs.map((chef, index) => (
          <div key={index} className="m-4">
            <OurChef name={chef.name} title={chef.title} image={chef.image} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default ExperiencedTeam;
