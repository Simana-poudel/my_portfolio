import About from "@components/About";
import Blog from "@components/Blog";
import Contact from "@components/Contact";
import HomeComponent from "@components/HomeComponent";
import Portfolio from "@components/Portfolio";
import Testimonial from "@components/Testimonial";
import Timeline from "@components/Timeline";
import Navigation from "@components/Navigation";
import React from "react";
import Projects from "@components/Projects";

const page = () => {
  return (
    <main className="">
      <div>
        <Navigation />
        <HomeComponent />
        <About />
        <Projects />
        <Timeline />
        <Contact />
      </div>
    </main>
  );
};

export default page;
