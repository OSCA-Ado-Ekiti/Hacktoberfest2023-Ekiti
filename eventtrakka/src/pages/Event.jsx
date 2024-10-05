import React from "react";
import TrendingEvents from "../components/TrendingEvents";
import RegisterEvents from "../components/RegisterEvents";
import NewsLetter from "../components/Newsletter";
import Footer from "../components/Footer";

const Event = () => {
  return (
    <div className="font-pop h-screen flex flex-col gap-9 sm:gap-12 pt-6">
        <TrendingEvents />
        <RegisterEvents />
        <NewsLetter />
        <Footer />
    </div>
  );
};

export default Event;
