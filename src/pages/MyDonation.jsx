import React, { useContext, useEffect, useState } from "react";
import MyDonateCard from "../components/MyDonateCard";
import { AuthContext } from "../Provider/AuthProvider";

const MyDonation = () => {
  const { user } = useContext(AuthContext);

  // console.log(myDonated);
  const [donate, setDonate] = useState([]);
  useEffect(() => {
    if (user?.email) {
      fetch(
        `https://assignment-10-tuilip-server.vercel.app/myDonate/${user?.email}`
      )
        .then((res) => res.json())
        .then((data) => setDonate(data));
    }
  }, [donate, user?.email]);

  return (
    <div className="mt-20">
      <h2>My Donation : {donate.length}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 container mx-auto">
        {donate?.map((myDonate) => (
          <MyDonateCard key={myDonate._id} myDonate={myDonate}></MyDonateCard>
        ))}
      </div>
    </div>
  );
};

export default MyDonation;
