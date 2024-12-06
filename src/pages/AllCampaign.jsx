import React from "react";
import TableCampaign from "../components/TableCampaign";
import { useLoaderData } from "react-router-dom";

const AllCampaign = () => {
  const allCampaigns = useLoaderData();

  return (
    <div className="pt-24">
      <h2 className="flex justify-center items-center text-center text-5xl ">
        All Campaigns Here:{allCampaigns.length}
      </h2>

      {allCampaigns.map((campaign) => (
        <TableCampaign key={campaign._id} campaign={campaign}></TableCampaign>
      ))}
    </div>
  );
};

export default AllCampaign;
