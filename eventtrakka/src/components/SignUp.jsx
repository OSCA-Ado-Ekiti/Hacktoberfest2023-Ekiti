import React, { useState } from "react";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
import { FaEye } from "react-icons/fa";

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  return (
    <>
      <Navbar />
      <div className="flex flex-col lg:flex-row overflow-hidden mt-28">
        <div className="hidden md:flex md:flex-col md:items-center md:justify-start w-2/4">
          <div className="hidden m-3 rounded-[69px] bg-custom-green w-[609px] h-[716px] lg:flex lg:flex-col items-center justify-center">
            <div className="z-10 relative text-[3rem] text-white font-bold leading-[51px] w-[495px] h-[260px]">
              Welcome to <br />
              EventTrakka, your <br />
              ultimate event
              <br />
              management <br />
              solution.
            </div>
            <p className="z-10 relative mt-4 text-lg font-light text-[1.5rem] w-[500px] h-[136px] text-white">
              Streamline event organization <br />
              and execution by getting <br />
              proper information using our
              <br />
              powerful web app.
            </p>

            {/* First Overlapping Shape */}
            <div className="absolute top-[146.5px] left-[432.02px] w-[241.58px] h-[59.69px] bg-white rounded-[50px] rotate-[-32deg] z-0 opacity-20"></div>
            <div className="absolute top-[206.37px] left-[472.02px] w-[241.58px] h-[59.69px] bg-white rounded-full rotate-[-32deg] z-0 opacity-20"></div>

            {/* Second Overlapping Shape */}
            <div className="absolute top-[715.29px] left-[17.3px] w-[241.58px] h-[59.69px] bg-white rounded-[50px] rotate-[-32deg] z-0 opacity-20"></div>
            <div className="absolute top-[775.29px] left-[47.6px] w-[241.58px] h-[59.69px] bg-white rounded-full rotate-[-32deg] z-0 opacity-20"></div>
          </div>
        </div>
        <div className="bg-white w-full lg:w-1/2">
          <div className="lg:mx-18 mx-5">
            <h1 className="text-green-900 justify-center item-center text-3xl font-bold lg:mt-20 mt-8 mb-3">
              Community Leads Sign Up
            </h1>
            <form className="pt-6 pb-3 w-full">
              <div className="mb-5 relative">
                <div className="flex flex-row">
                  <input
                    className="shadow3appearance-none border-2 border-gray-300 rounded-md w-1/2 h-12 py-6 px-3 mr-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline placeholder:text-lg"
                    id="text"
                    type="text"
                    placeholder="Leads Name"
                  />
                  <input
                    className="shadow  appearance-none border-2 border-gray-300 rounded-md w-1/2 h-12 py-6 px-3  text-gray-700 leading-tight focus:outline-none focus:shadow-outline placeholder:text-lg"
                    id="number"
                    type="number"
                    placeholder="Leads Mobile Number"
                  />
                </div>
              </div>
              <div className="mb-3 relative">
                <input
                  className="shadow appearance-none border-2 border-gray-300 rounded-md w-full h-12 py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                  id="email"
                  type="email"
                  placeholder="Leads Email Address"
                />
              </div>
              <div className="mb-3 relative">
                <input
                  className="shadow appearance-none border-2 border-gray-300 rounded-md w-full h-12 py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                  id="email"
                  type="email"
                  placeholder="Community Email Address"
                />
              </div>
              <div className="mb-3 relative">
                <input
                  className="shadow appearance-none border-2 border-gray-300 rounded-md w-full h-12 py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                  id="text"
                  type="text"
                  placeholder="Community"
                />
              </div>
              <div className="mb-3 relative">
                <span className="absolute inset-y-0 left-[92%] -top-2 flex items-center">
                  <FaEye className="h-7 w-7  text-gray-500" />
                </span>
                <input
                  className="shadow appearance-none border-2 border-gray-300 rounded-md w-full h-12 py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                  id="password"
                  type="password"
                  placeholder="Password"
                />
              </div>
              <div className="mb-3 relative">
                <span className="absolute inset-y-0 left-[92%] -top-2 flex items-center">
                  <FaEye className="h-7 w-7  text-gray-500" />
                </span>
                <input
                  className="shadow appearance-none border-2 border-gray-300 rounded-md w-full h-12 py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                  id="password"
                  type="password"
                  placeholder="Confirm Password"
                />
              </div>

              <div className="flex items-center justify-between mt-7">
                <label className="block text-gray-700 font-bold">
                  <span className="text-md">
                    By proceeding, I agree to EventTrakka’s{" "}
                    <a href="/termstouse" className="text-green-800">
                      Terms of Use{" "}
                    </a>
                    and acknowledge that I have read the
                    <a href="/privacypolicy" className="text-green-800">
                      {" "}
                      Privacy Policy.
                    </a>
                  </span>
                </label>
              </div>
              <div className="flex flex-row items-center justify-start mt-10">
                <button
                  className="bg-green-500 hover:bg-green-700  text-white w-1/3 font-bold py-2 px-8 rounded focus:outline-none focus:shadow-outline"
                  type="button"
                >
                  Sign Up
                </button>
                <p className="lg:text-[1.5rem] text-xl text-gray-600 flex items-center justify-start mx-auto lg:mx-2 justify-center text">
                  Already have an account?
                  <Link to="/login" className="text-green-800 font-bold">
                    {" "}
                    Sign in
                  </Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
