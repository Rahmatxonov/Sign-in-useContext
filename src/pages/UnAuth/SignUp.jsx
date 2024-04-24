import React, { useContext, useRef } from "react";
import { Context } from "../../Context/Context";
import { Navigate, useNavigate } from "react-router-dom";

const SignUp = () => {
  const { setSignUpData } = useContext(Context);
  const newLoginRef = useRef();
  const newPasswordRef = useRef();
  const navigate = useNavigate();
  const signUpDataSubmit = (e) => {
    e.preventDefault();

    const data = {
      newLogin: newLoginRef.current.value,
      newPassword: newPasswordRef.current.value,
    };

    setSignUpData(data);
    navigate(-1);
  };

  return (
    <div className="text-center w-[475px] bg-white m-auto mt-[5%] rounded-[20px] pr-[30px] pl-[30px] ">
      <div className="flex items-center gap-x-[12px] ml-[50px]">
        <span className="block h-[40px] w-[6px] bg-[#F8D442] mt-[44px]"></span>
        <h2 className="font-bold text-[32px] leading-[32px] pt-[44px]">
          Admin Students
        </h2>
      </div>
      <h3 className="font-semibold text-[22px] leading-[26px] pt-[43px] uppercase">
        Sign up
      </h3>
      <p className="font-normal text-[14px] leading-[17px] text-[#6C6C6C] pt-[9px] pb-[50px]">
        Enter your credentials to access your account
      </p>
      <form onSubmit={signUpDataSubmit} className="text-start">
        <label>
          <p className="font-medium text-[14px] leading-[17px] text-[#6C6C6C] pb-[11px]">
            Enter new login
          </p>
          <input
            ref={newLoginRef}
            className="border-2 rounded-md p-[15px] w-full placeholder:text-[#CDCDCD] outline-none"
            type="text"
            placeholder="Enter your login"
          />
        </label>
        <label>
          <p className="font-medium text-[14px] leading-[17px] text-[#6C6C6C] pb-[11px] pt-[19px]">
            Create new password
          </p>
          <input
            ref={newPasswordRef}
            className="border-2 rounded-md p-[15px] w-full placeholder:text-[#CDCDCD] outline-none"
            type="password"
            placeholder="Enter your password"
          />
        </label>
        <button className="block mt-[35px] bg-[#FEAF00] w-full rounded-md p-[14px] text-white uppercase font-normal text-[14px] leading-[17px]">
          Sign up
        </button>
        <p className="pt-[85px]"></p>
      </form>
    </div>
  );
};

export default SignUp;
