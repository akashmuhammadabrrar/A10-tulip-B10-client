import React from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const TableCampaign = ({ campaign }) => {
  const { _id, title, name, photo, email } = campaign;

  const handleDelete = (_id) => {
    // console.log(_id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(
          `https://assignment-10-tuilip-server.vercel.app/campaigns/${_id}`,
          {
            method: "DELETE",
          }
        )
          .then((res) => res.json())
          .then((data) => {
            // console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });
            }
          });
      }
    });
  };

  return (
    <div className="overflow-x-auto">
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th></th>
            <th>Name</th>
            <th>Tittle</th>
            <th>Email</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {/* row 1 */}
          <tr>
            <th></th>
            <td>
              <div className="flex items-center gap-3">
                <div className="avatar">
                  <div className="mask mask-squircle h-12 w-12">
                    <img src={photo} alt="Avatar Tailwind CSS Component" />
                  </div>
                </div>
              </div>
            </td>
            <td>
              {title}
              <br />
            </td>
            <td>{email}</td>
            <th>
              <Link to={`/details/${_id}`} className="btn btn-ghost btn-xs">
                See More
              </Link>
              <Link
                to={`/updateCampaign/${_id}`}
                className="btn btn-ghost btn-xs">
                Update
              </Link>
              <button
                onClick={() => handleDelete(_id)}
                className="btn btn-error btn-xs">
                Delete
              </button>
            </th>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default TableCampaign;
