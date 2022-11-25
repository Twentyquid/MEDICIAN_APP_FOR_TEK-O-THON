import React from "react";
import { Routes, Route } from "react-router-dom";
import DashboardHome from "../components/DashboardHome";
import DesktopNav from "../components/DesktopNav";
import MobileNavbar from "../components/MobileNav";
import Payments from "./payments";
import Reports from "./reports";
import User from "./user";

function Dashboard() {
  return (
    <div className="md:h-screen w-full flex min-h-screen relative">
      <MobileNavbar />
      <DesktopNav />
      <Routes>
        <Route path="/home" element={<DashboardHome />} />
        <Route path="/reports" element={<Reports />} />
        <Route path="/payments" element={<Payments />} />
        <Route path="/user" element={<User />} />
      </Routes>
    </div>
  );
}

export default Dashboard;
