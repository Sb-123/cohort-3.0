import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
const screen1 = () => {
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
          <MyButton />
        </div>
      </div>
    </>
  );
};

const MyButton = () => {
  const [date, setDate] = useState("");
  const [buttonColor, setButtonColor] = useState("");

  const handleDateChange = (e) => {
    setDate(e.target.value);
    if (e.target.value.length === 8) {
      setButtonColor("#3bd4c8");
    } else {
      setButtonColor("#92a2b6");
    }
  };
  return (
    <button
      onChange={handleDateChange}
      className={`bg-[${buttonColor}]  text-white p-2 rounded-md w-80 mt-4`}
    >
      Continue
    </button>
  );
};

export default screen1;
