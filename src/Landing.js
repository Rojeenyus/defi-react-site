import React from "react";
import "./Landing.css";
import Navbar from "./components/landingpage/navbar/Navbar";
import Hero from "./components/landingpage/hero/Hero";
import About from "./components/landingpage/about/About";
import Developer from "./components/landingpage/developer/Developer";
import Subscribe from "./components/landingpage/subscribe/Subscribe";
import Footer from "./components/landingpage/footer/Footer";

function Landing() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Developer />
      <Subscribe />
      <Footer />
    </div>
  );
}

export default Landing;
