import React from "react";
import { useLoaderData } from "react-router-dom";

const MyDonation = () => {
  const myDonated = useLoaderData();
  console.log(myDonated);

  return (
    <div className="mt-20">
      <h2>My Donation Page: {myDonated.length}</h2>
    </div>
  );
};

export default MyDonation;
