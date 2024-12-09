import React from "react";
import { Typewriter } from "react-simple-typewriter";

const Heading = ({ title, subtitle }) => {
  return (
    <div className="mb-44">
      <h1 className="text-5xl font-semibold  text-center mb-4 dark:text-white">
        {title}
      </h1>
      <p className="text-center font-semibold dark:text-white">{subtitle}</p>
    </div>
  );
};

export default Heading;
