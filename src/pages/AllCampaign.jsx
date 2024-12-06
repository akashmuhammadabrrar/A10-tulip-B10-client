import React from "react";
import { useLoaderData } from "react-router-dom";

const AllCampaign = () => {
  const campaigns = useLoaderData();

  return (
    <div className="pt-24">
      <h2 className="flex justify-center items-center text-center text-5xl ">
        All Campaigns Here:{campaigns.length}
      </h2>
    </div>
  );
};

export default AllCampaign;
