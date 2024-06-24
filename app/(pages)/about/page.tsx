import AboutMe from "@/shared/components/aboutMe";
import React from "react";

const About = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        overflow: "hidden",
        height: "100dvh",
      }}
    >
      <AboutMe />
    </div>
  );
};

export default About;
