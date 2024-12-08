import React from "react";
import Slider from "../components/Slider";
import ExtraA from "../components/ExtraA";
import Heading from "../pages/Heading";
import ExtraB from "../components/ExtraB";
import { useLoaderData } from "react-router-dom";
import CampaignCard from "../components/CampaignCard";

const HomeLayout = () => {
  const campaigns = useLoaderData();

  const remainingCampaign = campaigns?.slice(0, 6);

  return (
    <div>
      <div>
        <Slider></Slider>
        <Heading
          title={"Contribute Your Money To Raising Them For Goods."}
          subtitle={
            "They All Are Young Entrepreneur. They Needs Funding For Raise Up Those Organizations. Your Donation Would Be Great Bless For All OF Them"
          }></Heading>
        <h2 className="text-4xl text-center">Running Campaign</h2>
        <div className="py-8 space-y-4 container mx-auto grid md:grid-cols-2 lg:grid-cols-3 sm:grid-cols-1">
          {remainingCampaign?.map((campaign) => (
            <CampaignCard key={campaign._id} campaign={campaign}></CampaignCard>
          ))}
        </div>
      </div>
      <ExtraB></ExtraB>
      <ExtraA></ExtraA>
    </div>
  );
};

export default HomeLayout;

// They All Are Young Entrepreneurs. They Needs Fund For Raise Up Those
// Organizations. Your Donation Would Be Great Bless For Established Them.
