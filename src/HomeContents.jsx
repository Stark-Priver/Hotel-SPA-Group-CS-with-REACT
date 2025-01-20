import React from "react";
import About from "./components/About";
import Home from "./components/Home";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import Services from "./components/Services";
import Testimonials from "./components/Testimonials";

function HomeContents() {
  return (
    <div>
      <About />
      <Home />
      <Navigation />
      <Footer />
      <Services />
      <Testimonials />
    </div>
  );
}

export default HomeContents;
