import React from "react";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="bg-gradient-to-br from-accent to-primary-light h-screen flex flex-col justify-center items-center text-white">
      <h1 className="text-5xl font-bold mb-4 font-josefin text-error bg-white p-10 rounded-md">
        Oops!
      </h1>
      <p className="text-lg mb-6 text-center">
        This page got lost on its way to you. Send it back if you find it!
      </p>
      <Link
        to="/"
        className="bg-white text-accent-orange font-semibold py-2 px-4 rounded hover:bg-gray-200 transition duration-300"
      >
        Back to Home
      </Link>
    </div>
  );
};

export default ErrorPage;
