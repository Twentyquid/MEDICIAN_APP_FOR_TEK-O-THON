import React from "react";

function User() {
  return (
    <div className="w-full flex-1 md:h-screen overflow-scroll pb-20 md:pb-0 min-h-screen px-4 py-3 bg-gray-800 overflow-x-hidden">
      <h3 className="text-2xl px-4 py-3 font-semibold text-white">
        User Details
      </h3>
      <div className="bg-white px-4 py-3 rounded-md flex justify-between">
        <div className="flex space-x-3">
          <p>name:</p>
          <p>John Doe</p>
        </div>
        <div className="flex space-x-3">
          <p>age:</p>
          <p>30</p>
        </div>
        <div className="flex space-x-3">
          <p>blood:</p>
          <p>AB-ve</p>
        </div>
        <div className="flex space-x-3">
          <p>weight:</p>
          <p>80kg</p>
        </div>
        <div className="flex space-x-3">
          <p>height:</p>
          <p>170cm</p>
        </div>
      </div>
      <div className="bg-white px-4 py-3 rounded-md mt-10">
        <p>Allergies</p>
        <p>Peanuts</p>
        <p>Lactose</p>
      </div>
      <div className="bg-white px-4 py-3 rounded-md mt-10">
        <p>Connected Accounts</p>
        <div className="flex">
          <div className="px-4 py-3"></div>
        </div>
      </div>
    </div>
  );
}

export default User;
