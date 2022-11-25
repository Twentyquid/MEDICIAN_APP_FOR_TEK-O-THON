import React from "react";
import { Routes, Route } from "react-router-dom";
import DashboardHome from "../components/DashboardHome";

function Dashboard() {
  return (
    <div>
      <Routes>
        <Route path="/home" element={<DashboardHome />} />
      </Routes>
    </div>
  );
}

export default Dashboard;
