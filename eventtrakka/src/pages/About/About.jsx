import React from "react";
import PreviousPost from "./PreviousPost";
import EventList from "./UpcomingEvent";
import Footer from "../../components/Footer"
import HeroAbout from "../../components/HeroAbout";
import Header from '../../components/Navbar'
const About = () => {
  return (
    <div>
      
      
      <Header />
      <HeroAbout/>
      <EventList />
      <PreviousPost />
      <Footer />
    </div>
  );
};

export default About;
