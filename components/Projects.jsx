"use client";
import React, { useState } from "react";
import TiltComponent from "./Tilt/TiltComponent";

const Projects = () => {
  return (
    <div
      id="project"
      className="flex flex-col items-center justify-between py-24 bg-background-1"
    >
      {/* desktop navigation */}
      <div className="md:flex hidden max-w-6xl mx-auto w-full items-center justify-center font-mono text-sm py-6 ">
        <div>
          <div className="">
            <h1 className="text-5xl font-extrabold mb-6">Projects</h1>
            <p className="max-w-[600px]">
              These are some of the projects I’ve worked on, showcasing my
              skills in Next.js and web development. Each project highlights
              unique challenges I solved and the technologies I excelled in.
            </p>
          </div>
          <div data-aos="fade-right">
            <TiltComponent></TiltComponent>
          </div>
        </div>
      </div>

      {/* mobile navigation */}
      <div className="md:hidden flex z-10 max-w-6xl mx-auto w-full items-center justify-center font-mono text-sm py-6 ">
        <div className="mx-3">
          <div className="">
            <h1 className="text-3xl font-extrabold mb-6">My Projects</h1>
            <p className="max-w-[600px]">
              These are some of the projects I’ve worked on, showcasing my
              skills in Next.js and web development. Each project highlights
              unique challenges I solved and the technologies I excelled in.
            </p>
          </div>
          <div data-aos="fade-right">
            <TiltComponent></TiltComponent>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
