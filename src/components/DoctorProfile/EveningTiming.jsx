import Button from "../Button";

function EveningTiming() {
  return (
    <div>
      <div>
        <div className="flex items-center justify-between py-4 pt-8">
          <h4 className="pl-4 text-lg font-bold">Evening</h4>
        </div>
        <div className="flex flex-wrap gap-3">
          <button className="rounded-3xl border-[1px] border-[#EBEBEB] px-4 py-5 text-base font-normal text-[#131313]">
            04:00 PM
          </button>
          <button className="rounded-3xl border-[1px] border-[#EBEBEB] px-4 py-5 text-base font-normal text-[#131313]">
            04:15 PM
          </button>
          <button className="rounded-3xl border-[1px] border-[#EBEBEB] px-4 py-5 text-base font-normal text-[#131313]">
            04:30 PM
          </button>
          <button className="rounded-3xl border-[1px] border-[#EBEBEB] px-4 py-5 text-base font-normal text-[#131313]">
            04:45 PM
          </button>
          <button className="rounded-3xl border-[1px] border-[#EBEBEB] px-4 py-5 text-base font-normal text-[#131313]">
            05:15 PM
          </button>
        </div>
        <Button className=" mt-8 w-full bg-[#3A643B] py-3 text-xl text-[#fff]">
          Make An Appointment
        </Button>
      </div>
    </div>
  );
}

export default EveningTiming;
