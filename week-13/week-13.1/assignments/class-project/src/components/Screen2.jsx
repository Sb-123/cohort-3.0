import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Screen2 = () => {
  return (
    <>
      <div className="h-screen bg-[#002a5a]">
        <div className="flex flex-col items-center justify-center">
          <div className="flex items-center gap-2 mt-24 mb-36">
            <FontAwesomeIcon icon="fa-solid fa-house-lock" />
            <h1 className="text-2xl font-bold">
              <span className="text-[#3ddacb]">Webinar</span>.gg
            </h1>
          </div>
          <h2 className="text-2xl font-bold mb-16">Get started</h2>
          <input
            className="bg-[#183f6a] text-white p-2 rounded-md w-80"
            type="email"
            placeholder="Email id"
          />
          <button className="bg-[#92a2b6] text-white p-2 rounded-md w-80 mt-4">
            Continue
          </button>
        </div>
      </div>
    </>
  );
};

export default Screen2;
