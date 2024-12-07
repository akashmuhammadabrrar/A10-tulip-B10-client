import React from "react";
import { useLoaderData } from "react-router-dom";

const Details = () => {
  const data = useLoaderData();
  const { title, name, photo, email, description, deadline } = data;

  return (
    <div className="mt-20">
      <h2 className="text-2xl font-semibold text-center">
        This is details about: Founder: {name}
      </h2>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row">
          <img src={photo} className="max-w-sm rounded-lg shadow-2xl" />
          <div>
            <h1 className="text-5xl font-bold">{title}</h1>
            <p className="py-6">{description}</p>
            <p className="py-6">Email: {email}</p>
            <p className="py-6">Deadline: {deadline}</p>
            <button className="btn btn-primary">Donate Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
