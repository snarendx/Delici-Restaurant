import React from "react";
import { FaPlayCircle } from "react-icons/fa";
import CountUp from 'react-countup';

const WatchOurVideo = () => {
  return (
    <div
      className="bg-black text-gray-200 min-h-screen flex flex-col items-center justify-center"
      style={{
        backgroundImage: "url(Image1.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed", // Keeps the image in a fixed position for a smooth parallax effect
      }}
    >
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-3xl md:text-5xl font-bold mb-4">
          AMAZING EXPERIENCE
        </h1>
        <h2 className="text-2xl md:text-4xl font-bold mb-8">Watch Our Video</h2>
        <div className="w-48 h-48 rounded-full bg-transparent mx-auto mb-12 flex items-center justify-center relative">
          <img
            src=""
            alt=""
            className="w-full h-full object-cover rounded-full"
          />
          <button
            className="absolute flex items-center justify-center"
            onClick={() => alert("Play Video")}
          >
            <FaPlayCircle size={60} color="#ffffff" />
          </button>
        </div>
        <p className="text-4xl md:text-6xl font-medium mb-12">
          A modern restaurant with a menu that will make your mouth water.
        </p>
        <span className="text-yellow-600">WILLIAM JOE - MASTER CHEF</span>
        <div className="flex flex-col md:flex-row justify-center items-center gap-8 mb-12">
          <div className="text-center flex flex-col items-center space-y-2">
            <div className="flex items-center gap-2">
              <h3 className="font-bold text-6xl">
                <CountUp end={150} duration={2} />+
              </h3>
              <p className="text-sm mt-3">DAILY ORDER</p>
            </div>
          </div>

          <div className="text-center flex flex-col items-center space-y-2">
            <div className="flex items-center gap-2">
              <h3 className="font-bold text-6xl">
                <CountUp end={62} duration={2} />+
              </h3>
              <p className="text-sm mt-3">SPECIAL DISHES</p>
            </div>
          </div>

          <div className="text-center flex flex-col items-center space-y-2">
            <div className="flex items-center gap-2">
              <h3 className="font-bold text-6xl">
                <CountUp end={35} duration={2} />+
              </h3>
              <p className="text-sm mt-3">EXPERT CHEF</p>
            </div>
          </div>

          <div className="text-center flex flex-col items-center space-y-2">
            <div className="flex items-center gap-2">
              <h3 className="font-bold text-6xl">
                <CountUp end={10} duration={2} />+
              </h3>
              <p className="text-sm mt-3">AWARDS WON</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WatchOurVideo;
