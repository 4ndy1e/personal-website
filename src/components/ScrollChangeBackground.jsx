import React, { useState, useEffect } from "react";

function ScrollChangeBackground() {
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
    <div
      style={{
        height: "200vh",
        backgroundColor: bgColor,
        transition: "background-color 1.5s ease",
      }}
    >
      <h1>Scroll to change background color</h1>
    </div>
  );
}

export default ScrollChangeBackground;
