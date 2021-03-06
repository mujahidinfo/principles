import React from "react";
import DailyPicks from "./DailyPicks";
import Footer from "./Footer";
import Header from "./Header";
import NavBar from "./NavBar";
import Principles from "./Principles";

const Home = () => {
  return (
    <div>
      <NavBar />
      <Header />
      <DailyPicks className="h-[25rem]" />
      <Principles />
      <Footer />
    </div>
  );
};

export default Home;
