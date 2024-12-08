import React from "react";
import { Link } from "react-router-dom";

const Card = ({ myCamp }) => {
  const { photo, title, description } = myCamp;
  return (
    <div className="card bg-base-100 w-96 shadow-xl">
      <figure className="px-10 pt-10">
        <img src={photo} alt="Shoes" className="rounded-xl" />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{title}</h2>
        <p>Description: {description}</p>
        <div className="card-actions">
          <Link to="/" className="btn btn-primary">
            Go Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card;
