import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div>
      <div className="mt-[150px]">
        <h1 className="text-8xl text-center">
          4<span className="text-red-600">0</span>4
        </h1>
      </div>
      <h1 className="text-red-600 text-8xl text-center mt-[50px]">NotFound</h1>
      <div className="flex justify-center mt-[50px]">
        <Link to="/">
          <button className="bg-red-600 text-white cursor-pointer rounded-xl w-[150px] h-10">
            HomePage
          </button>
        </Link>
      </div>
    </div>  
  );
};

export default NotFound;
