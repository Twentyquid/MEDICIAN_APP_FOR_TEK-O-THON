import React from "react";

function DashboardHome() {
  return (
    <div className="h-screen bg-gray-300 flex">
      <div>
        <div className="flex flex-col justify-between h-full rounded-lg rounded-l-none px-4 py-3 text-white bg-gray-800">
          <div className="flex-1 space-y-12 text-xl">
            <div>
              <i class="ri-home-line"></i>
            </div>
            <div>
              <i class="ri-bank-card-line"></i>
            </div>
            <div>
              <i class="ri-qr-code-line"></i>
            </div>
            <div>
              <i class="ri-pie-chart-2-line"></i>
            </div>
            <div>
              <i class="ri-settings-4-line"></i>
            </div>
          </div>
          <div>
            <i class="ri-logout-box-line"></i>
          </div>
        </div>
      </div>
      <div className="flex-1"></div>
    </div>
  );
}

export default DashboardHome;
