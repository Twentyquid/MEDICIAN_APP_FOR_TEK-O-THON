import React from "react";
import { Link } from "react-router-dom";

function MobileNavbar() {
  return (
    <div className="md:hidden fixed z-50 bottom-3 left-0 right-0 px-4 py-4 bg-gray-800 text-white rounded-full mx-3">
      <div className="flex justify-between text-2xl">
        <p className="text-[#d2fc00]">
          <Link to="/dashboard/home">
            <i className="ri-home-line"></i>
          </Link>
        </p>
        <Link to="/dashboard/user">
          <i className="ri-user-line"></i>
        </Link>
        <p>
          <Link to="/dashboard/payments">
            <i className="ri-bank-card-line"></i>
          </Link>
        </p>
        <p>
          <Link to="/dashboard/reports">
            <i className="ri-pie-chart-line"></i>
          </Link>
        </p>
      </div>
    </div>
  );
}

export default MobileNavbar;
