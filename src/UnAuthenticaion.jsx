import React from "react";
import { Route, Routes } from "react-router-dom";
import SignIn from "./pages/UnAuth/SignIn";
import SignUp from "./pages/UnAuth/SignUp";

const UnAuthenticaion = () => {
  return (
    <Routes>
      <Route path="/" element={<SignIn />} />
      <Route path="/sign-up" element={<SignUp />} />
    </Routes>
  );
};

export default UnAuthenticaion;
