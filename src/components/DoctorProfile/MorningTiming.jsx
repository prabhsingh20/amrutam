import { useState } from "react";

function MorningTiming() {
  const [activeButton, setActiveButton] = useState("11:00 AM");

  const handleButtonClick = (time) => {
    setActiveButton(time);
  };

  return (
    <div>
      <div className="flex items-center justify-between py-4 pt-8">
        <h4 className="pl-4 text-lg font-bold">Morning</h4>
      </div>
      <div className="flex flex-wrap gap-3">
        <button
          onClick={() => handleButtonClick("09:00 AM")}
          className={`rounded-3xl border-[1px] border-[#EBEBEB] px-4 py-5 text-base font-normal text-[#131313] duration-100 ease-in hover:bg-[#3A643B] hover:text-[#fff] ${activeButton === "09:00 AM" && "bg-[#3A643B] text-[#fff]"}`}
        >
          09:00 AM
        </button>
        <button
          onClick={() => handleButtonClick("09:30 AM")}
          className={`rounded-3xl border-[1px] border-[#EBEBEB] px-4 py-5 text-base font-normal text-[#131313] duration-100 ease-in hover:bg-[#3A643B] hover:text-[#fff] ${activeButton === "09:30 AM" && "bg-[#3A643B] text-[#fff]"}`}
        >
          09:30 AM
        </button>
        <button
          onClick={() => handleButtonClick("10:00 AM")}
          className={`rounded-3xl border-[1px] border-[#EBEBEB] px-4 py-5 text-base font-normal text-[#131313] duration-100 ease-in hover:bg-[#3A643B] hover:text-[#fff] ${activeButton === "10:00 AM" && "bg-[#3A643B] text-[#fff]"}`}
        >
          10:00 AM
        </button>
        <button
          onClick={() => handleButtonClick("10:15 AM")}
          className={`rounded-3xl border-[1px] border-[#EBEBEB] px-4 py-5 text-base font-normal text-[#131313] duration-100 ease-in hover:bg-[#3A643B] hover:text-[#fff] ${activeButton === "10:15 AM" && "bg-[#3A643B] text-[#fff]"}`}
        >
          10:15 AM
        </button>
        <button
          onClick={() => handleButtonClick("10:45 AM")}
          className={`rounded-3xl border-[1px] border-[#EBEBEB] px-4 py-5 text-base font-normal text-[#131313] duration-100 ease-in hover:bg-[#3A643B] hover:text-[#fff] ${activeButton === "10:45 AM" && "bg-[#3A643B] text-[#fff]"}`}
        >
          10:45 AM
        </button>
        <button
          onClick={() => handleButtonClick("11:00 AM")}
          className={`rounded-3xl border-[1px] border-[#EBEBEB] px-4 py-5 text-base font-normal text-[#131313] duration-100 ease-in hover:bg-[#3A643B] hover:text-[#fff] ${activeButton === "11:00 AM" && "bg-[#3A643B] text-[#fff]"}`}
        >
          11:00 AM
        </button>
      </div>
    </div>
  );
}

export default MorningTiming;
