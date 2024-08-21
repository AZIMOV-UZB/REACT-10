import React from "react";
import { BsEmojiFrown } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <div className="not h-max" >
    <div className="container ">
      <div className="flex mr-auto flex-col gap-6 items-center  mb-4">
        <h2 className="text-[68px] text-yellow-300	 font-[800]">404</h2>
        <p className="text-yellow-300	 text-2xl">Sahifa tugalanmagan </p>
        <BsEmojiFrown className="text-[38px] text-[#dbdb38]" />
        <div className="mb-5">
          <button
            onClick={() => navigate("/")}
            className="p-3 bg-amber-300	 mx-2 rounded-lg cursor-pointer"
          >
            Goo Home
          </button>
          <button
            onClick={() => navigate(-1)}
            className="p-3 bg-amber-300	 mx-2 rounded-lg cursor-pointer"
          >
            Goo Back
          </button>

        </div>
      </div>
    </div>
    </div>
  );
};

export default NotFound;
