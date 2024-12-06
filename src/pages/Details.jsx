import React from "react";
import { useLoaderData } from "react-router-dom";

const Details = () => {
  const data = useLoaderData();
  console.log(data);

  return (
    <div className="mt-20">
      <h2>This is a details page: {data.length}</h2>
    </div>
  );
};

export default Details;
