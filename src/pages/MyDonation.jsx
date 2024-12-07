import React from "react";
import { useLoaderData } from "react-router-dom";
import MyDonateCard from "../components/MyDonateCard";

const MyDonation = () => {
  const myDonated = useLoaderData();
  console.log(myDonated);

  return (
    <div className="mt-20">
      <h2>My Donation Page: {myDonated.length}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 container mx-auto">
        {myDonated.map((myDonate) => (
          <MyDonateCard key={myDonate._id} myDonate={myDonate}></MyDonateCard>
        ))}
      </div>
    </div>
  );
};

export default MyDonation;
