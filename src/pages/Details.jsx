import React from "react";
import { useLoaderData, useNavigate } from "react-router-dom";

const Details = () => {
  const navigate = useNavigate();
  const data = useLoaderData();

  const { title, name, photo, email, description, deadline, amount } = data;
  const donateData = { title, name, photo, email, description, deadline };
  const handleDonate = () => {
    fetch("http://localhost:5000/myDonate", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(donateData),
    })
      .then((res) => res.json())
      .then((data) => {
        navigate("/");
        alert("Donation success");
        // console.log(data);
      });
  };
  return (
    <div className="mt-20">
      <h2 className="text-2xl font-semibold text-center">
        This is details about: Founder: {name}
      </h2>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row">
          <img src={photo} className="max-w-sm rounded-lg shadow-2xl" />
          <div>
            <h1 className="text-3xl font-bold">{title}</h1>
            <p className="py-6">{description}</p>
            <p className="py-6">Email: {email}</p>
            <p className="py-6">Amount: {amount}</p>
            <p className="py-6">Deadline: {deadline}</p>
            <button onClick={handleDonate} className="btn btn-primary">
              Donate Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
