import React from "react";

const events = [
  {
    date: "15/09/2022",
    title: "FOOD, FLAVOUR",
    description: "Flavour so good you’ll try to eat with your eyes.",
    image: "FoodFlavor.jpg",
  },
  {
    date: "08/09/2022",
    title: "HEALTHY FOOD",
    description: "Flavour so good you’ll try to eat with your eyes.",
    image: "HealthyFood.jpg",
  },
  {
    date: "03/09/2022",
    title: "RECIPIE",
    description: "Flavour so good you’ll try to eat with your eyes.",
    image: "Image1.jpg",
  },
];

const EventCard = ({ date, title, description, image }) => (
  <div className="relative group overflow-hidden">
    <img
      src={image}
      alt={title}
      className="w-full h-80 object-cover transition-all duration-500 ease-in-out opacity-90 transform group-hover:opacity-100 group-hover:translate-y-2"
    />

    <div className="absolute top-4 left-4 bg-black text-white px-2 py-1 text-sm font-semibold z-10">
      {date}
    </div>

    <div className="absolute inset-0 bg-[#E4C590] opacity-0 group-hover:opacity-25 transition-opacity duration-500"></div>

    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4 z-10">
      <h3 className="text-white font-bold">{title}</h3>
      <p className="text-white">{description}</p>
    </div>
  </div>
);

const UpcomingEvent = () => {
  return (
    <div className="bg-black text-white py-10">
      <div className="text-center">
        <p className="text-[#E4C590] tracking-widest">RECENT UPDATES</p>
        <h2 className="text-4xl font-bold">Upcoming Event</h2>
      </div>

      <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6 px-4 md:px-20">
        {events.map((event, index) => (
          <EventCard key={index} {...event} />
        ))}
      </div>

      <div className="text-center mt-8">
        <button className="relative mt-12 inline-block px-6 py-2 md:px-10 md:py-2 text-xs md:text-lg text-[#E4C590] hover:text-black transition-all duration-500 ease-in border-2 border-[#E4C590] rounded-none shadow-[inset_0_0_0_0_#E4C590] hover:shadow-[inset_0_-100px_0_0_#E4C590] active:scale-90">
          VIEW OUR BLOG
        </button>
      </div>
    </div>
  );
};

export default UpcomingEvent;
