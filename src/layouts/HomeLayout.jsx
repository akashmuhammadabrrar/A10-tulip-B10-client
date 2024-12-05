import React from "react";
import Slider from "../components/Slider";
import ExtraA from "../components/ExtraA";
import Heading from "../pages/Heading";
import ExtraB from "../components/ExtraB";

const HomeLayout = () => {
  return (
    <div>
      <div>
        <Slider></Slider>
        <Heading
          title={"Contribute Your Money To Raising Them For Goods."}
          subtitle={
            "They All Are Young Entrepreneur. They Needs Funding For Raise Up Those Organizations. Your Donation Would Be Great Bless For All OF Them"
          }></Heading>
      </div>
      <ExtraB></ExtraB>
      <ExtraA></ExtraA>
    </div>
  );
};

export default HomeLayout;

// They All Are Young Entrepreneurs. They Needs Fund For Raise Up Those
// Organizations. Your Donation Would Be Great Bless For Established Them.
