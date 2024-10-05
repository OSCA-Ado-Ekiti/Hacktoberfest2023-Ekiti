import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import Navbar from "../components/Navbar";
import HeroView from "../components/HeroView";

const Home = () => {
  const scrollControls = useAnimation();

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById("partners-section");
      const sectionTop = section.offsetTop - window.innerHeight;

      if (window.scrollY >= sectionTop) {
        scrollControls.start({ opacity: 1, y: 0 });
      } else {
        scrollControls.start({ opacity: 0, y: 30 });
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrollControls]);

  return (
    <div className="bg-gray-50">
      <Navbar />
      <HeroView />
      <motion.section
        id="partners-section"
        initial={{ opacity: 0, y: 50 }}
        animate={scrollControls}
        transition={{ ease: "linear", duration: 0.5 }}
        style={{
          background: "#EDFCF4",
        }}
        className="py-8 mt-20 px-4 sm:px-8 md:px-12 lg:px-20 mb-5"
      >
        <div className="container mx-auto text-left">
          <div className="mb-6">
            <h4 className="text-3xl lg:text-4xl font-semibold leading-10 text-green-900">
              Backend Developers Info Session
            </h4>
            <h4 className="text-xl lg:text-2xl text-hero-text">
              Exploring Crucial Aspects Of Backend Technology
            </h4>
          </div>

          <div className="flex flex-col  gap-4 md:gap-0 md:flex-row justify-left items-center mb-6">
            <h4 className="text-xl self-start md:self-center text-green-600 mr-4">
              Date:{" "}
              <span className="text-green-900 font-bold">Oct 12, 2023</span>
            </h4>
            <div className="flex self-start md:self-center gap-2 space-x-2">
              <button className="bg-green-900 hover:bg-green-700 text-white font-normal py-2 px-4 rounded-xl">
                Virtual
              </button>
              <button className="bg-green-900 hover:bg-green-700 text-white font-normal py-2 px-4 rounded-xl">
                Backend
              </button>
              <button className="bg-green-900 hover:bg-green-700 text-white font-normal py-2 px-4 rounded-xl">
                GDSC Fuoye
              </button>
            </div>
          </div>

          <div className="text-left mb-6">
            <h4 className="text-xl lg:text-2xl text-black-600">
              Jorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              vulputate libero et velit interdum, ac aliquet odio mattis. Class
              aptent taciti sociosqu ad litora torquent per conubia nostra, per
              inceptos himenaeos. Curabitur tempus urna at turpis condimentum
              lobortis. Ut commodo efficitur neque. Ut diam quam, semper iaculis
              condimentum ac, vestibulum eu nisl.
            </h4>
          </div>

          <div className="text-left">
            <h4 className="text-xl lg:text-2xl text-black-600">
              <span className="font-bold">Link to Register: </span>
              <a href="https://bit.ly.334455" className=" hover:text-green-700">
                https://bit.ly.334455
              </a>
            </h4>
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default Home;
