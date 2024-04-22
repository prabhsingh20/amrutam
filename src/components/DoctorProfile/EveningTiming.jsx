import { useState } from "react";
import Button from "../Button";
import TimingButton from "./TimingButton";

function EveningTiming() {
  const [activeButton, setActiveButton] = useState(null);

  const handleButtonClick = (time) => {
    setActiveButton(time);
  };

  return (
    <div>
      <div>
        <div className="flex items-center justify-between py-4 pt-8">
          <h4 className="pl-4 text-lg font-bold">Evening</h4>
        </div>
        <div className="flex flex-wrap gap-3">
          <TimingButton
            onClick={() => handleButtonClick("04:00 PM")}
            className={`${activeButton === "04:00 PM" && "bg-[#3A643B] text-[#fff]"}`}
          >
            04:00 PM
          </TimingButton>
          <TimingButton
            onClick={() => handleButtonClick("04:15 PM")}
            className={`${activeButton === "04:15 PM" && "bg-[#3A643B] text-[#fff]"}`}
          >
            04:15 PM
          </TimingButton>
          <TimingButton
            onClick={() => handleButtonClick("04:30 PM")}
            className={`${activeButton === " 04:30 PM" && "bg-[#3A643B] text-[#fff]"}`}
          >
            04:30 PM
          </TimingButton>
          <TimingButton
            onClick={() => handleButtonClick("04:45 PM")}
            className={`${activeButton === "04:45 PM" && "bg-[#3A643B] text-[#fff]"}`}
          >
            04:45 PM
          </TimingButton>
          <TimingButton
            onClick={() => handleButtonClick("05:15 PM")}
            className={`${activeButton === "05:15 PM" && "bg-[#3A643B] text-[#fff]"}`}
          >
            05:15 PM
          </TimingButton>
        </div>
        <Button className=" mt-8 w-full bg-[#3A643B] py-3 text-xl text-[#fff]">
          Make An Appointment
        </Button>
      </div>
    </div>
  );
}

export default EveningTiming;
