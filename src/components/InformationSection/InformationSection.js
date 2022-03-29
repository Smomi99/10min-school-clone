import React from "react";
import watch from "../../images/watch.webp";
import book from "../../images/edu.webp";
import live from "../../images/live.webp";
import ask from "../../images/ask.webp";
import note from "../../images/note.webp";
import leaderboard from "../../images/leaderboard.webp";
const InformationSection = () => {
  return (
    <div className="container App">
      <div class="grid grid-cols-3 gap-4">
        <div className="w-2/3 mx-16">
          <img className="mx-auto  mb-4" src={watch} alt="" />
          <p className="text-xl font-bold">Watch video lectures </p>
          <p className="text-md text-gray-600">
            Learn at your own pace from our 20,000+ videos{" "}
          </p>
        </div>
        <div className="w-2/3 mx-8 ">
          <img className="mx-auto  mb-4" src={book} alt="" />
          <p className="text-xl font-bold">Practice anytime </p>
          <p className="text-md text-gray-600">
            Instant scores, explanations and leaderboards!{" "}
          </p>
        </div>
        <div className="w-2/3 ">
          <img className="mx-auto  mb-4" src={live} alt="" />
          <p className="text-xl font-bold">Attend live classes</p>
          <p className="text-md text-gray-600">
            Daily live classes help you maintain your routine{" "}
          </p>
        </div>
        <div className="w-2/3 mx-16 mt-8">
          <img className="mx-auto  mb-4" src={note} alt="" />
          <p className="text-xl font-bold">Every note you will ever need </p>
          <p className="text-md text-gray-600">
            Access our lecture sheets and interactive books{" "}
          </p>
        </div>
        <div className="w-2/3 mt-8 mx-8">
          <img className="mx-auto  mb-4" src={leaderboard} alt="" />
          <p className="text-xl font-bold">Daily results and leaderboards</p>
          <p className="text-md text-gray-600">
            See where you stand among your friends{" "}
          </p>
        </div>
        <div className="w-2/3 mt-8 ">
          <img className="mx-auto  mb-4" src={ask} alt="" />
          <p className="text-xl font-bold">Ask your teacher </p>
          <p className="text-md text-gray-600">
            Get your doubts solved within our platform
          </p>
        </div>
      </div>
    </div>
  );
};

export default InformationSection;
