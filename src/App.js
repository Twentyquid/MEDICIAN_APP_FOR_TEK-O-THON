import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/dashboard";
import Signin from "./pages/signin";
import "remixicon/fonts/remixicon.css";

let logged = false;

function App() {
  if (logged) {
    return <div></div>;
  } else {
    return (
      <div className="">
        <Router>
          <Routes>
            <Route path="/" element={<Signin />} />
            <Route path="/dashboard/*" element={<Dashboard />} />
          </Routes>
        </Router>
      </div>
    );
  }
}

export default App;
