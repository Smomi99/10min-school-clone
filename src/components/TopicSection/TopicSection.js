import React from "react";
import { MdMenuBook } from "react-icons/md";
import { FaGraduationCap, FaBriefcase, FaRocket } from "react-icons/fa";

const TopicSection = () => {
  return (
    <div className="App mt-8">
      <div className=" mx-8">
        <h1 style={{ width: "622px", margin: "auto" }} className="text-5xl p-6">
          We have everything you need to learn anything
        </h1>
        <p className="text-gray-600 text-2xl">
          Choose your topic from our vast library to get started
        </p>
      </div>
      <div className="grid bg-gray-100 rounded-lg p-4 grid-cols-4 gap-2 m-12">
        <div className="flex gap-2 p-6 mx-2 items-center   shadow-lg  bg-white rounded-lg">
          <div className="text-4xl text-green-800">
            <MdMenuBook />
          </div>
          <h1 className="text-2xl">Class 1-12</h1>
        </div>
        <div className="flex gap-2 p-6 mx-2 items-center   shadow-lg  bg-white rounded-lg">
          <div className="text-4xl text-green-800">
            <FaGraduationCap />
          </div>
          <h1 className="text-2xl">Addmission</h1>
        </div>
        <div className="flex gap-2 p-6 mx-2 items-center   shadow-lg  bg-white rounded-lg">
          <div className="text-4xl text-green-800">
            <FaBriefcase />
          </div>
          <h1 className="text-2xl">Job Exam Preparation</h1>
        </div>
        <div className="flex gap-2 p-6 mx-2 items-center   shadow-lg  bg-white rounded-lg">
          <div className="text-4xl text-green-800">
            <FaRocket />
          </div>
          <h1 className="text-2xl">Courses</h1>
        </div>
      </div>
    </div>
  );
};

export default TopicSection;
