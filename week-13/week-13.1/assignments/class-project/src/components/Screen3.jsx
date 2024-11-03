import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Screen3 = () => {
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
          <h2 className="text-2xl font-bold mb-16">
            Check your email for a code
          </h2>
          <p className="text-gray-400 mb-4">
            Please enter the code we sent to your email.
          </p>
          <input
            className="bg-[#183f6a] text-white p-2 rounded-md w-80"
            type="text"
            placeholder="Enter the code"
          />
        </div>
      </div>
    </>
  );
};

export default Screen3;
