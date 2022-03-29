import React from "react";
import "./Banner.css";
import hero from "../../images/hero.webp";
const Banner = () => {
  return (
    <div class=" p-12 bg-black items-center grid grid-cols-2 gap-4 px-4">
      <div className="px-8">
        <h1 className="text-white text-6xl"> Experience Better Learning</h1>
        <p className="text-white text-xl mt-8 mb-8">
          Be a part of our huge community and start your personalized learning
          journey!
        </p>
        <div className="dropdown">
          <button className="dropbtn flex items-center ">
            Select your option{" "}
            <svg
              className="ml-2 w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M19 9l-7 7-7-7"
              ></path>
            </svg>
          </button>
          <div className="dropdown-content">
            <a href="#">Class 1-12</a>
            <a href="#">Admission</a>
            <a href="#">BCS Preliminary</a>
          </div>
        </div>
      </div>

      <div>
        <img className="p-14" src={hero} alt="" />
      </div>
    </div>
  );
};

export default Banner;
