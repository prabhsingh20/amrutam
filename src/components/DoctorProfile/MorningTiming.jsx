import { useState } from "react";
import TimingButton from "./TimingButton";

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
        <TimingButton
          className={`${activeButton === "09:00 AM" && "bg-[#3A643B] text-[#fff]"}`}
          onClick={() => handleButtonClick("09:00 AM")}
        >
          09:00 AM
        </TimingButton>
        <TimingButton
          className={`${activeButton === "09:30 AM" && "bg-[#3A643B] text-[#fff]"}`}
          onClick={() => handleButtonClick("09:30 AM")}
        >
          09:30 AM
        </TimingButton>
        <TimingButton
          onClick={() => handleButtonClick("10:00 AM")}
          className={`${activeButton === "10:00 AM" && "bg-[#3A643B] text-[#fff]"}`}
        >
          10:00 AM
        </TimingButton>
        <TimingButton
          onClick={() => handleButtonClick("10:15 AM")}
          className={`${activeButton === "10:15 AM" && "bg-[#3A643B] text-[#fff]"}`}
        >
          10:15 AM
        </TimingButton>
        <TimingButton
          onClick={() => handleButtonClick("10:45 AM")}
          className={`${activeButton === "10:45 AM" && "bg-[#3A643B] text-[#fff]"}`}
        >
          10:45 AM
        </TimingButton>
        <TimingButton
          onClick={() => handleButtonClick("11:00 AM")}
          className={`${activeButton === "11:00 AM" && "bg-[#3A643B] text-[#fff]"}`}
        >
          11:00 AM
        </TimingButton>
      </div>
    </div>
  );
}

export default MorningTiming;
