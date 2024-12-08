import React from "react";
import errorImg from "../assets/error.jpg";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div>
      <h2 className="text-4xl font-semibold text-center mt-10">
        Page Note Found 404
      </h2>
      <div className="flex flex-col justify-center items-center mt-10">
        <img className="w-96" src={errorImg} alt="" />
        <Link to="/" className="btn btn-primary mt-5">
          Home
        </Link>
      </div>
    </div>
  );
};

export default Error;
