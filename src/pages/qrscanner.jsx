import React, { useState } from "react";
import QrReader from "react-qr-scanner";

function QrScanner() {
  const [data, setData] = useState("");
  function handleScan(value) {
    setData(value);
    console.log(data);
  }

  function handleError(err) {
    console.log(err);
  }
  return <div></div>;
}

export default QrScanner;
