import React, { useContext, useRef } from "react";
import { Link } from "react-router-dom";
import { Context } from "../../Context/Context";

const SignIn = () => {
  const { setSignInData } = useContext(Context);
  const loginRef = useRef();
  const passwordRef = useRef();

  const signInSubmit = (e) => {
    e.preventDefault();

    const data = {
      login: loginRef.current.value,
      password: passwordRef.current.value,
    };
    setSignInData(data);
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
        Sign in
      </h3>
      <p className="font-normal text-[14px] leading-[17px] text-[#6C6C6C] pt-[9px] pb-[50px]">
        Enter your credentials to access your account
      </p>
      <form onSubmit={signInSubmit} className="text-start">
        <label>
          <p className="font-medium text-[14px] leading-[17px] text-[#6C6C6C] pb-[11px]">
            Login
          </p>
          <input
            ref={loginRef}
            className="border-2 rounded-md p-[15px] w-full placeholder:text-[#CDCDCD] outline-none"
            type="text"
            placeholder="Enter your login"
          />
        </label>
        <label>
          <p className="font-medium text-[14px] leading-[17px] text-[#6C6C6C] pb-[11px] pt-[19px]">
            Password
          </p>
          <input
            ref={passwordRef}
            className="border-2 rounded-md p-[15px] w-full placeholder:text-[#CDCDCD] outline-none"
            type="password"
            placeholder="Enter your password"
          />
        </label>
        <button className="block mt-[35px] bg-[#FEAF00] w-full rounded-md p-[14px] text-white uppercase mb-[11px] font-normal text-[14px] leading-[17px]">
          Sign in
        </button>
        <Link to={"/sign-up"} className="block text-center pb-[52px]">
          Sign up
        </Link>
      </form>
    </div>
  );
};

export default SignIn;
