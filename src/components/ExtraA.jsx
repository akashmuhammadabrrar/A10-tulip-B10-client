import React from "react";
import { Typewriter } from "react-simple-typewriter";

const ExtraA = () => {
  return (
    <div className="hero bg-base-200 min-h-screen mb-44">
      <div className="hero-content flex-col lg:flex-row">
        <img
          src="https://st2.depositphotos.com/7865540/10713/i/450/depositphotos_107134500-stock-photo-business-team-sitting-on-table.jpg"
          className="max-w-sm rounded-lg shadow-2xl"
        />
        <div>
          <h1 className="text-5xl font-bold">
            <Typewriter
              words={["Unite All The Entrepreneur Here!"]}
              loop={5}
              cursor
              cursorStyle="_"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}></Typewriter>
          </h1>
          <p className="py-6">
            Crowdfunding is a collaborative way to raise funds online for
            projects, businesses, or causes by pooling small contributions from
            many individuals, often via dedicated platforms like Kickstarter or
            GoFundMe.
          </p>
          <button className="btn btn-primary bg-[#000080] text-white">
            Explore More
          </button>
        </div>
      </div>
    </div>
  );
};

export default ExtraA;
