import React, { useState } from "react";

function Payments() {
  return (
    <div className="w-full flex-1 md:h-screen overflow-scroll pb-20 md:pb-0 min-h-screen px-4 py-3 bg-gray-800 overflow-x-hidden">
      <div className="w-full h-full pb-3">
        <div className="bg-white h-full w-full rounded-md px-4 py-3">
          <div className="mb-4">
            <p className="text-xl font-semibold">Payments</p>
          </div>
          <div className="">
            <div className="md:w-2/3 px-4 py-3 bg-violet-50 space-y-5 rounded-md shadow-md">
              <p className="text-lg font-bold">St James Hospital</p>
              <p className="text-lg font-semibold">Amount:</p>
              <p className="text-2xl font-semibold">Rs 12,000/-</p>
              <div className="h-0.5 w-full bg-gray-700/50 my-2"></div>
              <div className="flex justify-between">
                <div className="flex items-center space-x-2">
                  <i className="ri-information-fill"></i>
                  <p>Due date:</p>
                </div>
                <p className="font-semibold">DEC 20, 2022</p>
              </div>
              <div>
                <div className="flex space-x-2 mt-10">
                  <button className="bg-blue-500 px-4 py-3 font-bold text-white rounded-md">
                    Pay Now
                  </button>
                  <button className="bg-violet-500 px-4 py-3 font-bold text-white rounded-md">
                    Details
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Payments;
