import React from "react";
import Banner from "../Banner/Banner";
import ClassesSection from "../ClassesSection/ClassesSection";
import Header from "../Header/Header";
import InformationSection from "../InformationSection/InformationSection";
import TopicSection from "../TopicSection/TopicSection";

const Home = () => {
  return (
    <div>
      <Header />
      <Banner />
      <TopicSection />
      <InformationSection />
      <ClassesSection />
    </div>
  );
};

export default Home;
