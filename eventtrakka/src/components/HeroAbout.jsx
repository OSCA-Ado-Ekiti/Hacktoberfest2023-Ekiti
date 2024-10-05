import React from "react";
import aboutImage from "../assets/about-image.jpg";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Footer from "./Footer";
const HeroAbout = () => {
  return (
    <div className=" m-0 md:pb-28 box-border w-full">
      
      <div className="mt-40  font-pop">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="min-h-[90vh] h-fit lg:px-40  px-10"
        >
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="lg:w-[954px] min-w-[450px] box-border flex gap-5 flex-col"
          >
            <h1 className="text-green-900 text-[50px] sm:text-[64px] leading-[77.14px]">
              Seamless Event Management Made Effortless – Welcome to EventTrakka
            </h1>
            <p className="text-[28px] sm:text-[36px] font-light leading-[43.56px] lg:w-[703px] ">
              Getting Informations About Tech Event In Ekiti Just in One Place
            </p>
            <button className="bg-green-900 hover:bg-green-800 transition ease-in-out duration-500 hover:scale-[1.001] h-[90px] w-[419px] mt-5 rounded-[45px] text-[32px] leading-[48px] text-white">
              See Upcoming events
            </button>
          </motion.div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="flex items-center justify-center mt-10 flex-wrap gap-32"
        >
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="relative"
          >
            <div className="w-[484px] h-[551px] bg-green-200 rounded-[74px] absolute -left-[90px]  lg:-left-[121px]"></div>
            <div className="h-[438px] w-[431px] top-[49px] sm:left-0 left-12  relative">
              <img
                src={aboutImage}
                alt=""
                className="w-full h-full object-cover rounded-[74px] border-[3px] border-green-800 z-50 "
              />
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="relative lg:left-0 left-12"
          >
            <h3 className="text-[48px] leading-[72px]">About</h3>
            <p className=" md:text-[30px] font-light md:leading-[36.3px] text-xl lg:w-[703px]">
              Welcome to EventTrakka, your ultimate event management solution.
              Streamline event organization and execution by getting proper
              information using our powerful web app. Easily manage and track
              every aspect of your events, from information to organizers. Say
              goodbye to event management stress and hello to success.
            </p>
          </motion.div>
        </motion.div>
      </div>
      <div className="bg-green-200 p-30 w-full">
        <div className="grid gap-[40px] mx-auto">
          <div className=""></div>
        </div>
      </div>
    </div>
  );
};

export default HeroAbout;
