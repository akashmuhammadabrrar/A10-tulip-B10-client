import React from "react";
import { Link } from "react-router-dom";

const TableCampaign = ({ campaign }) => {
  const { _id, title, name, photo, email } = campaign;

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
            </th>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default TableCampaign;
