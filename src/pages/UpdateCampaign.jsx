import React, { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../Provider/AuthProvider";

const UpdateCampaign = () => {
  const campaigns = useLoaderData();
  const { user } = useContext(AuthContext);
  const {
    _id,
    name,
    amount,
    email,
    photo,
    title,
    type,
    deadline,
    description,
  } = campaigns;

  const handleUpdateCampaign = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const photo = form.photo.value;
    const title = form.title.value;
    const type = form.type.value;
    const amount = form.amount.value;
    const description = form.description.value;
    const deadline = form.deadline.value;
    const updatedCampaign = {
      name,
      email,
      photo,
      title,
      type,
      type,
      amount,
      description,
      deadline,
    };
    console.log(updatedCampaign);

    // send data to the server
    fetch(`http://localhost:5000/campaigns/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedCampaign),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: "Update Success!",
            text: "Campaign Updated Successfully",
            icon: "success",
            confirmButtonText: "Cool",
          });
          form.reset();
        }
      });
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-white shadow-md rounded-md mt-16 py-10">
      <h2 className="text-2xl font-bold mb-4 text-center mt-4">
        Update The Campaign: {title}
      </h2>
      <form onSubmit={handleUpdateCampaign}>
        <div className="grid grid-cols-2 gap-4">
          {/* Name */}
          <div className="mb-4 col-span-2 sm:col-span-1">
            <label className="block text-gray-700">User Name</label>
            <input
              type="text"
              defaultValue={user?.displayName}
              readOnly
              name="name"
              className="w-full px-3 py-2 border rounded-md bg-gray-100"
            />
          </div>
          {/* Email */}
          <div className="mb-4 col-span-2 sm:col-span-1">
            <label className="block text-gray-700">User Email</label>
            <input
              type="email"
              defaultValue={user?.email}
              readOnly
              name="email"
              className="w-full px-3 py-2 border rounded-md bg-gray-100"
            />
          </div>
          {/* Image */}
          <div className="mb-4 col-span-2 sm:col-span-1">
            <label className="block text-gray-700">Image url</label>
            <input
              type="text"
              name="photo"
              defaultValue={photo}
              className="w-full px-3 py-2 border rounded-md"
              placeholder="Enter image URL"
            />
          </div>
          {/* Title */}
          <div className="mb-4 col-span-2 sm:col-span-1">
            <label className="block text-gray-700">Campaign Title</label>
            <input
              type="text"
              name="title"
              defaultValue={title}
              className="w-full px-3 py-2 border rounded-md"
              placeholder="Enter campaign title"
            />
          </div>
          {/* types */}
          <div className="mb-4 col-span-2 sm:col-span-1">
            <label className="block text-gray-700">Campaign Type</label>
            <select
              name="type"
              defaultValue={type}
              className="w-full px-3 py-2 border rounded-md">
              <option value="Community">Donation For Winter</option>
              <option value="startup">Startup It</option>
              <option value="sports">Sports</option>
              <option value="business"> Restaurant Business</option>
              <option value="Entertainment">Film Production</option>
              <option value="creative">Real State Business</option>
            </select>
          </div>
          {/* Amount */}
          <div className="mb-4 col-span-2 sm:col-span-1">
            <label className="block text-gray-700">
              Minimum Donation Amount
            </label>
            <input
              type="number"
              name="amount"
              defaultValue={amount}
              className="w-full px-3 py-2 border rounded-md"
              placeholder="Enter minimum donation amount"
            />
          </div>
          {/* description */}
          <div className="mb-4 col-span-2">
            <label className="block text-gray-700">Description</label>
            <textarea
              name="description"
              defaultValue={description}
              className="w-full px-3 py-2 border rounded-md"
              placeholder="Enter description"></textarea>
          </div>
          {/* Deadline */}
          <div className="mb-4 col-span-2 sm:col-span-1">
            <label className="block text-gray-700">time And Date</label>
            <input
              type="date"
              name="deadline"
              defaultValue={deadline}
              className="w-full px-3 py-2 border rounded-md"
            />
          </div>
          {/* submit */}
          <div className="mb-4 col-span-2">
            <input
              type="submit"
              value=" Add Campaign"
              className="w-full px-3 py-2 bg-blue-500 text-white rounded-md cursor-pointer"></input>
          </div>
        </div>
      </form>
    </div>
  );
};

export default UpdateCampaign;
