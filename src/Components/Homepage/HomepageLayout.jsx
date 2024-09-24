import React from "react";
import Header from "./Header";
import OurStory from "./OurStory";
import SpecialSelection from "./SpecialSelection";
import SpecialOffer from "./SpecialOffer";
import Testimonial from "./Testimonial";
import Reservation from "./Reservation";
import OurStrength from "./OurStrength";
import BestMenu from "./BestMenu";
import ExperiencedTeam from "./OurChef";
import WatchOurVideo from "./WatchOurVideo";
import UpcomingEvent from "./UpcomingEvent";
import MenuSection from "./MenuSection";
import SpecialDish from "./SpecialDish";
import Footer from "./Footer";

const HomepageLayout = () => {
  return (
    <div>
      <Header />

      <MenuSection />
      <OurStory />
      <SpecialDish />
      <SpecialSelection />
      <SpecialOffer />
      <Testimonial />
      <Reservation />
      <OurStrength />
      <BestMenu />
      <ExperiencedTeam />
      <WatchOurVideo />
      <UpcomingEvent />
      <Footer />
    </div>
  );
};

export default HomepageLayout;
