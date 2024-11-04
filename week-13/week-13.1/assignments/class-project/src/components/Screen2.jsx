import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";

const Screen2 = () => {
  const [email, setEmail] = React.useState("");
  const [isEmailComplete, setIsEmailComplete] = React.useState(false);

  const handleEmailChange = (event) => {
    const value = event.target.value;
    setEmail(value);
    setIsEmailComplete(email.includes("@gmail.com"));
  };

  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/screen3");
  };
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
            value={email}
            onChange={handleEmailChange}
          />
          <button
            className={` ${
              email ? "bg-[#3FE0CF]" : " bg-[#65809D]"
            }  text-white p-2 rounded-md w-80 mt-4 `}
            disabled={!isEmailComplete}
            onClick={handleClick}
          >
            Continue
          </button>
        </div>
      </div>
    </>
  );
};

export default Screen2;
