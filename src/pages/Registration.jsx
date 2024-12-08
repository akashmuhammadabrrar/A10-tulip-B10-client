import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import { AuthContext } from "../Provider/AuthProvider";

const Registration = () => {
  const navigate = useNavigate();
  const { createNewUser, setUser, updateUser, handleWithGoogleSignIn } =
    useContext(AuthContext);

  const handelSubmit = (e) => {
    e.preventDefault();
    const form = e.target;

    // get form data
    const formData = new FormData(e.target);
    const name = formData.get("name");
    const email = formData.get("email");
    const password = formData.get("password");
    const photo = formData.get("photo");
    console.log({ name, email, password, photo });
    createNewUser(email, password)
      .then((result) => {
        const user = result.user;
        updateUser(name, photo);
        setUser(user);
        form.reset();
        navigate("/");
        alert("Registration Success");
        console.log(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
  };

  return (
    <div>
      <Navbar></Navbar>
      <div className="hero bg-base-200 min-h-screen mt-16">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Crete An Account!</h1>
            <p className="py-6">
              If You Don't Have An Account Then, First You Can Create An Account
              Here. After Creating The Account Then You Can Visit This Site By
              Login
            </p>
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <form onSubmit={handelSubmit} className="card-body">
              <div className="form-control">
                {/* Name */}
                <label className="label">
                  <span className="label-text">Your Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Write Your Name"
                  className="input input-bordered"
                  required
                />
              </div>
              {/* Email */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text"> Your Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              {/* photo url */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo Url</span>
                </label>
                <input
                  type="text"
                  name="photo"
                  placeholder="Image Url"
                  className="input input-bordered"
                  required
                />
              </div>
              {/* password */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
                <label className="label">
                  <Link to="/login" className="label-text-alt link link-hover">
                    Already Have An Account?{" "}
                    <span className="text-blue-700 font-bold">Login</span>
                  </Link>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Submit</button>
                <button
                  onClick={handleWithGoogleSignIn}
                  className="btn btn-accent mt-2">
                  Google SingIn
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registration;
