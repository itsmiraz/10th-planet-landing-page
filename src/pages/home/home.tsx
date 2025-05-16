import React from "react";
import Hero from "./components/hero";
import Program from "./components/program";
import LevelUp from "./components/levelUp";
import Instructors from "./components/instructors";
import KidClass from "./components/kidClass";

const Home = () => {
  return (
    <div>
      <Hero />
      <Program />
      <LevelUp/>
      <Instructors/>
      <KidClass/>
    </div>
  );
};

export default Home;
