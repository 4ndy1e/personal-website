import React, { useEffect, useState } from "react";
import Lander from "./Lander";
import Nav from "./Nav";

function Home() {
  const [bgColor, setBgColor] = useState("black");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPoint = 300; // Change this value to the point where you want to change color
      if (window.scrollY > scrollPoint) {
        setBgColor("white"); // New background color
      } else {
        setBgColor("black"); // Original background color
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section
      style={{
        backgroundColor: bgColor,
        transition: "background-color 1.5s ease",
      }}
    >
      <Nav />
      <Lander />
      <Projects />
    </section>
  );
}

function Projects() {
  return (
    <section className="h-[1000px] border-2">
      <h1 className="text-black">Projects</h1>
    </section>
  );
}

export default Home;
