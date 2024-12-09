import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../assets/logo.png";
import { AuthContext } from "../Provider/AuthProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  // console.log(user?.displayName);

  const links = (
    <>
      <li>
        <NavLink
          to="/"
          className="mr-6 border-none btn btn-outline  btn-warning">
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/campaigns"
          className="btn  btn-outline border-none  btn-warning text-white font-bold">
          All Campaigns
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/addCampaign"
          className="ml-6 btn btn-outline border-none btn-warning text-white font-bold">
          Add New Campaign
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/myCampaign"
          className="ml-6 btn btn-outline border-none btn-warning text-white font-bold">
          My Campaign
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/myDonations"
          className="ml-6 btn btn-outline border-none btn-warning text-white font-bold">
          My Donations
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="navbar bg-[#000080] fixed z-50 top-0">
      <div className="navbar-start">
        <div className="text-white">{user?.displayName}</div>
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-white font-bold"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
            {links}
          </ul>
        </div>
        <Link to="/" className="btn btn-ghost text-xl text-white font-semibold">
          Crowd
          <img className="w-6 h-6" src={logo} alt="" />
          Bloom
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
      <div className="navbar-end">
        {user && user?.email ? (
          <button onClick={logOut} className="btn text-red-700 font-bold">
            Logout
          </button>
        ) : (
          <Link to="/login" className="btn">
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
