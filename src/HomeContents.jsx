import React from "react";
import Navigation from "./components/Navigation";
import Testimonials from "./components/Testimonials";
import Services from "./components/Services";
import About from "./components/About";
import Footer from "./components/Footer";
import Home from "./components/Home";

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
