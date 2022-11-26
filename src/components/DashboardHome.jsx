import React, { useState } from "react";
import Appbar from "./Appbar";
// import DesktopNav from "./DesktopNav";
import LineChartCard from "./LineChartCard";
import folder from "../images/folder.png";
import Calendar from "react-calendar";
import "./Calendar.css";
import medicine from "../images/medicine.jpg";
import pill1 from "../images/pill1.png";
import pill2 from "../images/pill2.png";
import Modal from "./Modal";

function DashboardHome() {
  const [modal, setModal] = useState(false);
  function changeModal() {
    setModal(true);
    console.log(modal);
  }

  function closeModal() {
    setModal(false);
    console.log(modal);
  }
  return (
    <div className="h-full w-full flex md:pb-0 pb-20">
      {/* <DesktopNav /> */}
      <div className="flex-1">
        <div className="flex flex-col md:grid md:grid-cols-5 md:grid-rows-5 h-full overflow-hidden gap-0.5 px-4 py-3  bg-gray-800">
          <div className="row-start-1 row-end-4 col-start-1 col-end-3 bg-white pt-4 overflow-hidden">
            {/* <Appbar /> */}
            <div>
              {/* <div className="hidden md:flex justify-between items-center px-4 py-3">
                <p className="text-2xl font-semibold">Hello John 👋</p>
                <p className="text-sm font-bold text-slate-800">12 NOV</p>
              </div> */}
              <div className="flex justify-between">
                <div>
                  <p className="text-2xl px-4 py-3 font-bold">
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
              <div className="w-full flex gap-1 px-4 py-3">
                <LineChartCard />
                {/* <LineChartCard /> */}
              </div>
            </div>
          </div>
          <div className="row-start-1 row-end-4 col-start-3 col-end-6 bg-white relative px-4 py-3">
            {modal ? <Modal closeModal={closeModal} /> : null}
            <p className="text-lg font-semibold mb-3">Calendar</p>
            <div className="grid grid-cols-1 md:flex">
              <Calendar onChange={changeModal} className="shadow-lg ml-2" />
              <div className="flex-1 basis-2/3 px-4 py-3 h-full w-full">
                {/* <div className="flex">
                  <div className="px-4 py-3 bg-violet-100 w-full rounded-md">
                    <p>Dentist</p>
                    <p>Sunday 20</p>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
          <div
            style={{
              backgroundImage: `url(${medicine})`,
              backgroundPosition: "center 30%",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
            }}
            className="min-h-[300px] md:min-h-0 row-start-4 row-end-6 col-start-1 col-end-3 bg-white order-4 px-4 py-3"
          >
            <div className="flex justify-between mb-3 text-slate-600">
              <p className="text-lg font-semibold">Recommendations</p>
              <p className="text-sm font-bold text-blue-500">see all</p>
            </div>
            <div>
              <p className="text-xl font-semibold">
                How should you check your health status on your own?
              </p>
              <div className="w-full h-full">
                <div className="w-full flex justify-center items-center "></div>
              </div>
            </div>
          </div>
          <div className="min-h-[300px] md:min-h-0 row-start-4 row-end-6 col-start-3 col-end-6 bg-white px-4 py-3">
            <div className="">
              <div className="flex justify-between mb-3 text-slate-800">
                <p className="text-lg font-semibold">Prescriptions</p>
                <p className="text-sm font-bold text-blue-500">see all</p>
              </div>
              <div className="flex gap-2 h-full justify-center">
                <div className="bg-violet-200 px-4 py-3 rounded-md flex justify-center items-center flex-col shadow-lg">
                  <div>
                    <img className="w-16 h-16" src={pill1} alt="" />
                  </div>
                  <div>
                    <p className="font-semibold">9:30 am</p>
                    <p className="text-lg font-semibold">chlorthalidone</p>
                    <p>After food</p>
                  </div>
                </div>
                <div className="bg-violet-200 px-4 py-3 rounded-md flex justify-center items-center flex-col shadow-lg">
                  <div>
                    <img className="w-16 h-16" src={pill2} alt="" />
                  </div>
                  <div>
                    <p className="font-semibold">11:00 am</p>
                    <p className="text-lg font-semibold">captopril</p>
                    <p>After food</p>
                  </div>
                </div>
                <div className="bg-violet-200 px-4 py-3 rounded-md flex justify-center items-center flex-col shadow-lg">
                  <div>
                    <img className="w-16 h-16" src={pill1} alt="" />
                  </div>
                  <div>
                    <p className="font-semibold">4:00 pm</p>
                    <p className="text-lg font-semibold">chlorthalidone</p>
                    <p>After food</p>
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
