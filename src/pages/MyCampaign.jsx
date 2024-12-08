import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import Card from "../components/Card";

const MyCampaign = () => {
  const { user } = useContext(AuthContext);
  const [campaign, setCampaign] = useState([]);

  const filterCampaign = campaign.filter(
    (userEmail) => userEmail?.email === user?.email
  );

  useEffect(() => {
    fetch("http://localhost:5000/campaigns")
      .then((res) => res.json())
      .then((data) => setCampaign(data));
  }, [campaign]);

  return (
    <div className="mt-20">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 container mx-auto gap-3">
        {filterCampaign &&
          filterCampaign?.map((myCamp) => (
            <Card key={myCamp._id} myCamp={myCamp}></Card>
          ))}
      </div>
    </div>
  );
};

export default MyCampaign;
