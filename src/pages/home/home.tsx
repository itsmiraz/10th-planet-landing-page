import React from "react";
import Hero from "./components/hero";
import Program from "./components/program";
import LevelUp from "./components/levelUp";
import Instructors from "./components/instructors";

const Home = () => {
  return (
    <div>
      <Hero />
      <Program />
      <LevelUp/>
      <Instructors/>
    </div>
  );
};

export default Home;
