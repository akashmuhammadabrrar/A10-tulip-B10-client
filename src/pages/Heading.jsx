import React from "react";

const Heading = ({ title, subtitle }) => {
  return (
    <div className="mb-44">
      <h1 className="text-5xl font-semibold  text-center mb-4">{title}</h1>
      <p className="text-center font-semibold">{subtitle}</p>
    </div>
  );
};

export default Heading;
