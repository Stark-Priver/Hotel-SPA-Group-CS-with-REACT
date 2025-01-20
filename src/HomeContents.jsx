// import React from "react";
import About from "./components/About";
import Home from "./components/Home";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import Services from "./components/Services";
import Testimonials from "./components/Testimonials";

function HomeContents() {
  return (
    <div>
      <Navigation />
      <Home />
      <About />
      <Services />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default HomeContents;
