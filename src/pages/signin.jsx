import React from "react";
import Form from "../components/Form";

function Signin() {
  return (
    <div>
      <div className="h-screen">
        <h3 className="text-2xl flex w-full justify-center items-center pt-6">
          Sign In
        </h3>
        <Form />
      </div>
    </div>
  );
}

export default Signin;
