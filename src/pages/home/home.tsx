import React from "react";
import Hero from "./components/hero";
import Program from "./components/program";
import LevelUp from "./components/levelUp";

const Home = () => {
  return (
    <div>
      <Hero />
      <Program />
      <LevelUp/>
    </div>
  );
};

export default Home;
