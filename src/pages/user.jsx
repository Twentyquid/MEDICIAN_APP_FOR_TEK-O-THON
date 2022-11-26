import React from "react";
import person1 from "../images/person1.jpg";
import person2 from "../images/person2.jpg";

function User() {
  return (
    <div className="w-full flex-1 md:h-screen overflow-scroll pb-20 md:pb-0 min-h-screen px-4 py-3 bg-gray-800 overflow-x-hidden">
      <h3 className="text-2xl px-4 py-3 font-semibold text-white">
        User Details
      </h3>
      <div className="bg-white px-4 py-3 rounded-md grid grid-cols-2 gap-3 items-center md:flex justify-between">
        <div className="flex items-center space-x-3">
          <p className="text-lg font-semibold">name:</p>
          <p>John Doe</p>
        </div>
        <div className="flex items-center space-x-3">
          <p className="text-lg font-semibold">age:</p>
          <p>30</p>
        </div>
        <div className="flex items-center space-x-3">
          <p className="text-lg font-semibold">blood:</p>
          <p>AB-ve</p>
        </div>
        <div className="flex items-center space-x-3">
          <p className="text-lg font-semibold">weight:</p>
          <p>80kg</p>
        </div>
        <div className="flex items-center space-x-3">
          <p className="text-lg font-semibold">height:</p>
          <p>170cm</p>
        </div>
      </div>
      <div className="bg-white px-4 py-3 rounded-md mt-10">
        <p className="text-xl font-semibold mb-5">Allergies</p>
        <p className="mt-5">Peanuts</p>
        <p className="mt-5">Lactose</p>
      </div>
      <div className="bg-white px-4 py-3 rounded-md mt-10">
        <p className="text-xl font-bold mb-10">Connected Accounts</p>
        <div className="flex space-x-12">
          <div className="px-4 py-3 bg-violet-300 flex justify-center items-center flex-col rounded-md">
            <div className="rounded-full overflow-hidden">
              <img className="w-16 h-16 object-cover" src={person1} alt="" />
            </div>
            <p className="text-lg font-semibold">James</p>
            <p>age: 30</p>
            <button className="px-4 py-3 bg-green-100 rounded-md mt-4 text-sm font-bold">
              Check Health
            </button>
          </div>
          <div className="px-4 py-3 bg-violet-300 flex justify-center items-center flex-col rounded-md">
            <div className="rounded-full overflow-hidden">
              <img className="w-16 h-16 object-cover" src={person2} alt="" />
            </div>
            <p className="text-lg font-semibold">Jane</p>
            <p>age: 30</p>
            <button className="px-4 py-3 bg-green-100 rounded-md mt-4 text-sm font-bold">
              Check Health
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default User;
