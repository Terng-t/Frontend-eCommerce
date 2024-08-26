import React from "react";
import Navbar from "../../components/Navbar/Navbar.jsx";
import HomeContent from "./Content/HomeContent";
import PopularGift from "./PopularGift/PopularGift";
import About from "../../components/About/About";
import Footer from "../../components/Footer/Footer";
import NavOption from "../../components/Navbar/NavOption.jsx";

const Home = () => {
  return (
    <>
      <Navbar />
      <NavOption />
      <HomeContent />
      <PopularGift />
      <About />
      <Footer />
    </>
  );
};

export default Home;
