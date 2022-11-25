import React from "react";
import { Routes, Route } from "react-router-dom";
import DashboardHome from "../components/DashboardHome";
import MobileNavbar from "../components/MobileNav";
import Reports from "./reports";

function Dashboard() {
  return (
    <div className="md:h-screen min-h-screen relative">
      <MobileNavbar />
      <Routes>
        <Route path="/home" element={<DashboardHome />} />
        <Route path="/reports" element={<Reports />} />
      </Routes>
    </div>
  );
}

export default Dashboard;
