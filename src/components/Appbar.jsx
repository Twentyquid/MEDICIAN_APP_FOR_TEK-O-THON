import React from "react";

function Appbar() {
  return (
    <div className="flex md:hidden justify-between items-center">
      <p className="text-2xl font-semibold">Hello John 👋</p>
      <div className="text-3xl">
        <i className="ri-menu-3-fill"></i>
      </div>
    </div>
  );
}

export default Appbar;
