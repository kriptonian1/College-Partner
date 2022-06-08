import React from "react";
import { useNavigate } from "react-router-dom";

const NavigBar = () => {

    const navigate = useNavigate();

  return (
    <div>
      <div className="flex justify-between sm:h-[5rem]">
        <div onClick={() => navigate("/")} className="p-5 pl-10 cursor-pointer flex text-[#5C7AFF] text-3xl font-bold items-center sm:w-[10rem] lg:w-[15rem]">
          CollegePartner
        </div>
        <div className="text-[#5B5B5B] flex space-x-8 items-center text-lg pr-10 ">
          <div className="cursor-pointer border-b border-b-white hover:border-b-black transition-all hover:text-black">Home</div>
          <div onClick={() => navigate("/landing")} className="cursor-pointer border-b border-b-white hover:border-b-black transition-all hover:text-black">Resources</div>
          <div className="cursor-pointer border-b border-b-white hover:border-b-black transition-all hover:text-black">Contact us</div>
          <button onClick={() => navigate("/login")} className="py-[0.5rem] px-[2.5rem] hover:shadow-lg border-2 transition-all  hover:bg-[#5C7AFF] hover:text-white border-[#5C7AFF] rounded-[10px]">
            Log In
          </button>
          <button className="py-[0.5rem] px-[2.5rem] border-[#5C7AFF] hover:border-[#5C7AFF] hover:shadow-lg transition-all hover:bg-white hover:text-[#5B5B5B] text-white border-2  bg-[#5C7AFF] rounded-[10px]">
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
};

export default NavigBar;
