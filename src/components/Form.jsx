import React from "react";
import { Link } from "react-router-dom";

function Form() {
  return (
    <div className="flex justify-center items-center h-4/6">
      <div className="space-y-3 w-full flex justify-center items-center flex-col">
        <div className="w-2/3 md:w-1/5">
          <p>Name:</p>
          <input
            className="bg-violet-100 block px-1 py-1 w-full rounded-md outline-none"
            type="text"
          />
        </div>
        <div className="w-2/3 md:w-1/5">
          <p>Email:</p>
          <input
            className="bg-violet-100 block px-1 py-1 w-full rounded-md outline-none"
            type="text"
          />
        </div>
        <div className="w-2/3 md:w-1/5 font-semibold flex justify-end">
          <button className=" bg-green-100 px-3 py-2 rounded-md shadow-sm">
            <Link to="/dashboard/home">SUBMIT</Link>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Form;
