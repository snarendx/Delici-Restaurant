import React from "react";

const OurStrength = () => {
  return (
    <section className="bg-[#171819] text-white py-16 relative">
      <img
        src="backgroundImageOurStrength.png"
        alt="backgroundImageOurStrength"
        className="absolute bottom-0 left-0 h-auto object-cover"
      />
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-12">
          <h3 className="text-[#E4C590] uppercase tracking-widest">
            Why Choose Us
          </h3>
          <div className="w-32 mx-auto flex  mt-3 items-center justify-center">
            <svg
              version="1.1"
              id="Layer_1"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              x="0px"
              y="0px"
              viewBox="0 0 97.1 12.7"
              enableBackground="new 0 0 97.1 12.7"
              xmlSpace="preserve"
              className="w-full"
            >
              <rect
                x="31.6"
                y="3"
                transform="matrix(0.7071 0.7071 -0.7071 0.7071 14.7528 -22.8645)"
                fill="none"
                stroke="#E3C48E"
                strokeWidth="0.75"
                strokeMiterlimit="10"
                width="6.8"
                height="6.8"
              />
              <rect
                x="58.7"
                y="3"
                transform="matrix(0.7071 0.7071 -0.7071 0.7071 22.699 -42.0484)"
                fill="none"
                stroke="#E3C48E"
                strokeWidth="0.75"
                strokeMiterlimit="10"
                width="6.8"
                height="6.8"
              />
              <polygon
                fill="none"
                stroke="#E3C48E"
                strokeWidth="0.75"
                strokeMiterlimit="10"
                points="48.6,12.1 39.8,6.4 48.6,0.6 57.3,6.4 
	"
              />
              <line
                fill="none"
                stroke="#E3C48E"
                strokeWidth="0.75"
                strokeMiterlimit="10"
                x1="3.2"
                y1="6.4"
                x2="30.2"
                y2="6.4"
              />
              <circle fill="#E3C48E" cx="2.6" cy="6.4" r="2.5" />
              <line
                fill="none"
                stroke="#E3C48E"
                strokeWidth="0.75"
                strokeMiterlimit="10"
                x1="93.9"
                y1="6.4"
                x2="66.9"
                y2="6.4"
              />
              <circle fill="#E3C48E" cx="94.4" cy="6.4" r="2.5" />
            </svg>
          </div>

          <h2 className="text-4xl font-bold mt-4">Our Strength</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { title: "Hygienic Food", src: "HygeinicFood.png" },
            { title: "Fresh Environment", src: "FreshEnvironment.png" },
            { title: "Skilled Chefs", src: "SkilledChef.png" },
            { title: "Event & Party", src: "EventAndParty.png" },
          ].map((item, index) => (
            <div
              key={index}
              className={`p-6 rounded-lg text-center flex flex-col items-center justify-center ${
                index % 2 === 0 ? "bg-[#151616]" : "bg-black"
              }`}
            >
              <img
                className="w-20 h-20 mb-4 transition-transform transform hover:rotate-[360deg] duration-500 ease-in-out"
                src={item.src}
                alt={item.title}
              />
              <h4 className="text-xl font-semibold mb-2">{item.title}</h4>
              <p className="text-gray-400">
                Lorem Ipsum is simply dummy printing and typesetting.
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurStrength;
