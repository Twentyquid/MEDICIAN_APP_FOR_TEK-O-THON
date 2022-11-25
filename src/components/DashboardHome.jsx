import React from "react";
import Appbar from "./Appbar";
// import DesktopNav from "./DesktopNav";
import LineChartCard from "./LineChartCard";
import folder from "../images/folder.png";
import Calendar from "react-calendar";
import "./Calendar.css";
import medicine from "../images/medicine.jpg";
import pill1 from "../images/pill1.png";
import pill2 from "../images/pill2.png";

function DashboardHome() {
  return (
    <div className="h-full flex md:pb-0 pb-20">
      {/* <DesktopNav /> */}
      <div className="flex-1">
        <div className="flex flex-col md:grid md:grid-cols-5 md:grid-rows-5 h-full gap-2 overflow-hidden px-4 py-3  bg-gray-800">
          <div className="row-start-1 row-end-4 col-start-1 col-end-3 bg-white rounded-md">
            <Appbar />
            <div>
              {/* <div className="hidden md:flex justify-between items-center px-4 py-3">
                <p className="text-2xl font-semibold">Hello John 👋</p>
                <p className="text-sm font-bold text-slate-800">12 NOV</p>
              </div> */}
              <div className="flex justify-between">
                <div>
                  <p className="text-2xl px-4 py-3">
                    Hello John, <br /> Check your <br /> Health!
                  </p>
                </div>
                <div className="px-4 py-3">
                  <div className="px-2 py-2 bg-green-200/50 text-green-600 rounded-full text-sm font-semibold flex justify-between items-center space-x-2">
                    <div className="flex-grow-0">
                      <i className="ri-check-line"></i>
                    </div>
                    <p>HEALTHY</p>
                  </div>
                  <div className="flex items-center mt-2">
                    <img className="w-12 h-12" src={folder} alt="" />
                    <p className="text-sm font-bold py-1 text-gray-500">
                      Annual <br />
                      Check up
                    </p>
                  </div>
                </div>
              </div>
              <div className="w-full flex gap-1">
                <LineChartCard />
                <LineChartCard />
              </div>
            </div>
          </div>
          <div className="row-start-1 row-end-4 col-start-3 col-end-6 bg-white rounded-md">
            <p>Calendar</p>
            <div className="grid grid-cols-1 md:flex">
              <Calendar className="shadow-lg ml-2" />
              <div className="flex-1 px-4 py-3 md:ml-5 h-full w-full">
                <p>Informations</p>
                <div>
                  <p>DETAILS</p>
                  <div className="bg-gray-300 rounded-md px-4 py-3 flex justify-between space-x-5">
                    <div className="flex flex-col bg-white px-2 py-1 rounded-md items-center justify-center">
                      <p>Blood</p>
                      <p>B+ve</p>
                    </div>
                    <div className="flex flex-col bg-white px-2 py-1 rounded-md items-center justify-center">
                      <p>Height</p>
                      <p>170cm</p>
                    </div>
                    <div className="flex flex-col bg-white px-2 py-1 rounded-md items-center justify-center">
                      <p>Weight</p>
                      <p>80kg</p>
                    </div>
                  </div>
                </div>
                {/* kdjfkdfdkjfd */}
                <div>
                  <p>DOCTORS</p>
                  <div className="bg-gray-300 rounded-md px-4 py-3 flex space-x-5">
                    <div className="rounded-full w-8 h-8 bg-green-200 flex justify-center items-center">
                      J
                    </div>
                    <div className="rounded-full w-8 h-8 bg-green-200 flex justify-center items-center">
                      J
                    </div>
                    <div className="rounded-full w-8 h-8 bg-green-200 flex justify-center items-center">
                      J
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row-start-4 row-end-6 col-start-1 col-end-3 bg-white rounded-md">
            <p>RECOMENDATIONS</p>
            <div>
              <p className="text-xl font-semibold">
                How should you check your health status on your own?
              </p>
              <div className="w-full h-full">
                <div className="w-full flex justify-center items-center">
                  <figure>
                    <img
                      className="w-full h-[150px] object-cover"
                      src={medicine}
                      alt=""
                    />
                  </figure>
                </div>
              </div>
            </div>
          </div>
          <div className="row-start-4 row-end-6 col-start-3 col-end-6 bg-white rounded-md">
            <div className="">
              <p>Prescriptions</p>
              <div className="flex gap-2 h-full">
                <div className="bg-violet-200 px-4 py-3 rounded-md flex justify-center items-center flex-col">
                  <div>
                    <img className="w-16 h-16" src={pill1} alt="" />
                  </div>
                  <div>
                    <p>9:30</p>
                    <p>Name of Medicine</p>
                    <p>After dinner</p>
                  </div>
                </div>
                <div className="bg-violet-200 px-4 py-3 rounded-md flex justify-center items-center flex-col">
                  <div>
                    <img className="w-16 h-16" src={pill2} alt="" />
                  </div>
                  <div>
                    <p>9:30</p>
                    <p>Name of Medicine</p>
                    <p>After dinner</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DashboardHome;
