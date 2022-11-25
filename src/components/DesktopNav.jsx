import React from "react";
import logo from "../images/logo.png";
import { Link } from "react-router-dom";

function DesktopNav() {
  return (
    <div className="hidden md:block">
      <div className="flex flex-col justify-between items-center h-full px-4 py-3 text-white bg-gray-800">
        <div className="mb-8">
          <div className="cursor-pointer">
            <img className="object-contain h-12 w-12" src={logo} alt="" />
          </div>
        </div>
        <div className="flex-1 space-y-8 text-xl">
          <div>
            <Link to="/dashboard/home">
              <i className="ri-home-line"></i>
            </Link>
          </div>
          <div>
            <Link to="/dashboard/payments">
              <i className="ri-bank-card-line"></i>
            </Link>
          </div>
          <div>
            <i className="ri-qr-code-line"></i>
          </div>
          <div>
            <Link to="/dashboard/reports">
              <i className="ri-pie-chart-2-line"></i>
            </Link>
          </div>
          <div>
            <Link to="/dashboard/user">
              <i className="ri-user-line"></i>
            </Link>
          </div>
        </div>
        <div className="text-xl">
          <i className="ri-logout-box-line"></i>
        </div>
      </div>
    </div>
  );
}

export default DesktopNav;
