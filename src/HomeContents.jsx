import React from "react";
import Navigation from "./components/Navigation";
import Testimonials from "./components/Testimonials";
import Services from "./components/Services";
import About from "./components/About";
import Footer from "./components/Footer";
import Home from "./components/Home";
import {
  hotelImages,
  hotelTexts,
  hotelInfo,
  ceoInfo,
  managerInfo,
  salesManagerInfo,
  testimonialsData,
  missionVisionStrategy,
} from "./components/Constants";

function HomeContents() {
  return (
    <div>
      <Navigation />
      <Home images={hotelImages} texts={hotelTexts} />
      <About
        hotelInfo={hotelInfo}
        ceoInfo={ceoInfo}
        managerInfo={managerInfo}
        salesManagerInfo={salesManagerInfo}
        mission={missionVisionStrategy.mission}
        vision={missionVisionStrategy.vision}
        strategy={missionVisionStrategy.strategy}
      />
      <Services />
      <Testimonials testimonials={testimonialsData} />
      <Footer />
    </div>
  );
}

export default HomeContents;
