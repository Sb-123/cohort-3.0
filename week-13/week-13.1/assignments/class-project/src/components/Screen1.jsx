import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Screen1 = () => {
  const [date, setDate] = useState("");

  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate("/Screen2");
  };

  const handleDateChange = (e) => {
    setDate(e.target.value);
  };

  return (
    <>
      <div className="h-screen bg-[#002a5a]">
        <div className="flex flex-col items-center justify-center">
          <div className="flex items-center gap-2 mt-24 mb-36">
            <h1 className="text-2xl font-bold">
              <span className="text-[#3ddacb]">Webinar</span>.gg
            </h1>
          </div>
          <h2 className="text-2xl font-bold mb-16">Verify your age</h2>
          <p className="text-gray-400 mb-4">
            Please confirm your birth year, This data will be stored.
          </p>
          <input
            className="bg-[#183f6a] text-white p-2 rounded-md w-80"
            type="text"
            value={date}
            onChange={handleDateChange}
            placeholder="Your birth year"
          />
          <button
            className={` ${
              date.length >= 10 ? "bg-[#3FE0CF]" : " bg-[#65809D]"
            }  text-white p-2 rounded-md w-80 mt-4`}
            disabled={date.length < 10}
            onClick={handleNavigate}
          >
            Continue
          </button>
        </div>
      </div>
    </>
  );
};

export default Screen1;
