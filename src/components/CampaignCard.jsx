import React from "react";
import Lottie from "react-lottie-player";
import { Link } from "react-router-dom";
import animationLot from "../assets/ani/Animation - 1733745675560.json";

const CampaignCard = ({ campaign }) => {
  const { _id, name, email, photo, title, type, deadline, description } =
    campaign;

  return (
    <div className="card bg-base-100 w-80  shadow-xl">
      <figure className="px-10 pt-10">
        <img src={photo} alt="Shoes" className="rounded-xl" />
      </figure>
      <div className="card-body items-start text-start">
        <Lottie
          animationData={animationLot}
          loop={true}
          autoplay={true}
          style={{ height: "150px", width: "150px" }}
        />

        <h2 className="text-xl font-bold">
          {" "}
          <span className="">title</span>:{title.slice(0, 20)}..
        </h2>
        <p>
          {" "}
          <span className="font-bold">Description</span>: {description}
        </p>
        <p>
          {" "}
          <span className="font-bold">Deadline: </span>: {deadline}
        </p>
        <p>
          {" "}
          <span className="font-bold">Name: </span>: {name}
        </p>
        <div className="card-actions">
          <Link
            to={`/details/${_id}`}
            className="btn btn-primary text-white bg-[#000080]">
            See More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CampaignCard;
