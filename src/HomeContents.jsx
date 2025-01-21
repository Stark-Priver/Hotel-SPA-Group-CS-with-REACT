import React from 'react'
import Navigation from './components/Navigation'
import Testimonials from './components/Testimonials'
import Services from './components/Services'
import Footer from './components/Footer'

function HomeContents() {
  return (
    <div>
      <Navigation />
      <Testimonials />
      <Services />
      <Footer />  
    </div>
  );
}

export default HomeContents