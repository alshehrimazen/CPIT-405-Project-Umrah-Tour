import React from "react";
import Header from "../components/Header";
import InfoCard from "../components/InfoCard";
import "./Home.css";

const Home = () => {
  return (
    <div className="h-layout">
      <Header />
      <div className="h-content">
        <InfoCard />
      </div>
    </div>
  );
};

export default Home;
