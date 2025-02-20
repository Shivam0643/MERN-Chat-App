import React from "react";
import GenderCheckbox from "./GenderCheckbox";

const Signup = () => {
  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
      <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
        <h1 className="text-3xl font-semibold text-center text-gray-300">
          Sign up
          <span className="text-blue-500"> ChatApp</span>
        </h1>
        {/* signup form */}
        <form>
          <div>
            <label className="label p-2">
              <span className="text-base lable-text">Full name</span>
            </label>
            <input
              type="text"
              placeholder="Enter Full name"
              className="w-full input input-bordered h-10"
            />
          </div>
          <div>
            <label className="label p-2">
              <span className="text-base lable-text">Username</span>
            </label>
            <input
              type="text"
              placeholder="Enter Username"
              className="w-full input input-bordered h-10"
            />
          </div>
          <div>
            <label className="label p-2">
              <span className="text-base lable-text">Password</span>
            </label>
            <input
              type="password"
              placeholder="Enter Password"
              className="w-full input input-bordered h-10"
            />
          </div>
          <div>
            <label className="label p-2">
              <span className="text-base lable-text">Confirm Password</span>
            </label>
            <input
              type="password"
              placeholder="Enter Confirm Password"
              className="w-full input input-bordered h-10"
            />
          </div>
          {/* GENDER CHECKBOX GOES HERE */}
          <GenderCheckbox/>

          <a
            href="#"
            className="text-sm hover:underline hover:text-blue-600 mt-2 inline-block"
          >
            Already have an account?
          </a>
          <div>
            <button className="btn btn-block btn-sm mt-2 border border-slate-700">Sign up</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
