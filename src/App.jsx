import React from "react";
import Header from "./Components/Homepage/Header";
import MenuSection from "./Components/Homepage/MenuSection";
import OurStory from "./Components/Homepage/OurStory";
import DishSection from "./Components/Homepage/SpecialDish";
import SpecialSelection from "./Components/Homepage/SpecialSelection";
import Testimonial from "./Components/Homepage/Testimonial";
import Reservation from "./Components/Homepage/Reservation";
import OurStrength from "./Components/Homepage/OurStrength";
import BestMenu from "./Components/Homepage/BestMenu";
import OurChef from "./Components/Homepage/OurChef";
import WatchOurVideo from "./Components/Homepage/WatchOurVideo";
import SpecialOffer from "./Components/Homepage/SpecialOffer";
import UpcomingEvent from "./Components/Homepage/UpcomingEvent";
import Footer from "./Components/Homepage/Footer";

function App() {
  return (
    <div className="relative">
      <Header />
      <MenuSection />
      <OurStory />
      <DishSection />
      <SpecialSelection />
      <SpecialOffer />
      <Testimonial />
      <Reservation />
      <OurStrength />
      <BestMenu />
      <OurChef />
      <WatchOurVideo />
      <UpcomingEvent />
      <Footer />
    </div>
  );
}

export default App;
