import React from "react";
import Navbar from "./components/Navbar/Navbar";
import HomeContent from "./components/Content/HomeContent";
import PopularGift from "./components/PopularGift/PopularGift";
import About from "./components/About/About";
import Footer from "./components/Footer/Footer";

const Home = () => {
  return (
    <>
      <Navbar />
      <HomeContent />
      <PopularGift />
      <About />
      <Footer />
    </>
  );
};

export default Home;
