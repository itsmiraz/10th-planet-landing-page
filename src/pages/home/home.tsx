import React from "react";
import Hero from "./components/hero";
import Program from "./components/program";
import LevelUp from "./components/levelUp";
import Instructors from "./components/instructors";
import KidClass from "./components/kidClass";
import Contact from "./components/contact";
import Gallery from "./components/gallery";

const Home = () => {
  return (
    <div>
      <Hero />
       <Program />
     <LevelUp/>
     <KidClass/>
     <Instructors/>
      <Gallery/>
      <Contact/> 
    </div>
  );
};

export default Home;
