import React from "react";

const ExtraB = () => {
  return (
    <div className="hero bg-base-200 min-h-screen mb-44">
      <div className="hero-content flex-col lg:flex-row">
        <div>
          <h1 className="text-5xl font-bold">
            Unite All The Entrepreneur Here!
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
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSalvrg6cWuA-_qFrNzvUmrbo1NywitPimKpQ&s"
          className="max-w-sm rounded-lg shadow-2xl"
        />
      </div>
    </div>
  );
};

export default ExtraB;
