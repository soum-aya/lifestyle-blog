import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <section className="flex justify-center items-center py-3">
      <div className="font-medium">
        <h1 className="capitalize text-lg  mb-4">oops! it's a dead end.</h1>
        <Link to="/" className="uppercase border-2 border-solid rounded  cursor-pointer bg-transparent text-base px-3 py-2 text-red-900">
          back home
        </Link>
      </div>
    </section>
  );
};

export default NotFound;
