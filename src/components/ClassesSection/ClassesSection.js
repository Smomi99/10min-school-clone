import React from "react";
import { FaPlayCircle } from "react-icons/fa";
const ClassesSection = () => {
  return (
    <div className="  mt-16 ">
      <div className="App">
        <h1 className="text-3xl font-bold">Class 1-12</h1>
        <p className="text-gray-600 text-xl mb-16">
          Find all your learning materials from Class 1 to 12 under one roof
        </p>
      </div>
      <div class="grid grid-cols-4 gap-4 mx-16">
        <div class="max-w-sm rounded-lg overflow-hidden shadow-lg">
          <div className="po">
            <div class="font-bold text-xl mb-2 h-28 p-8 bg-green-400 ">
              এইচএসসি | HSC
            </div>
            <p class="text-gray-700 mx-4 text-lg font-bold ">HSC</p>
          </div>
          <div class="px-4 pt-4 pb-2">
            <span class="inline-block flex items-center gap-2 bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              <FaPlayCircle /> photography
            </span>
            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              #travel
            </span>
            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              #winter
            </span>
            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              #winter
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClassesSection;
