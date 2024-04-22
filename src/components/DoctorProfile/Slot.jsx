function Slot() {
  return (
    <div>
      <div className="flex items-center justify-between py-8">
        <h4 className="text-xl font-bold">Pick a time slot</h4>
        <div className=" w-80 border-b-[1px] border-b-[#D4D4D4]"></div>
        <span className="material-symbols-outlined rounded-full border-[1px] border-[#DCDCDC] p-2">
          calendar_today
        </span>
      </div>
      <div className="flex items-center  justify-between rounded-xl border-[1px] border-[#E1E1E1] px-7 py-6">
        <span className="material-symbols-outlined cursor-pointer rounded-full border-2 border-[#808080] text-[#808080]">
          chevron_left
        </span>
        <button className="flex w-32 flex-col items-center gap-1 rounded-xl border-[1px] border-[#3A643B] bg-[#F2FBF2] px-4 py-2 ">
          <p className="flex items-center text-base font-bold text-[#3A643B] ">
            Mon, 10 Oct
          </p>
          <p className="text-base font-semibold text-[#818181]">10 slots</p>
        </button>
        <button className="flex w-32  flex-col items-center gap-1 rounded-xl border-[1px] border-[#E2E2E2] px-2 py-2 ">
          <p className="text-base font-medium  text-[#131313]"> Tue, 11 Oct</p>
          <p className="text-base font-bold text-[#D5512E]">02 slots</p>
        </button>
        <button className="flex w-32 flex-col items-center gap-1 rounded-xl border-[1px] border-[#E2E2E2] px-2 py-2 ">
          <p className="text-base font-medium text-[#131313]"> Wed, 12 Oct</p>
          <p className="text-base font-bold text-[#F1B93A]">05 slots</p>
        </button>
        <span className="material-symbols-outlined cursor-pointer rounded-full border-2 border-[#808080] text-[#808080]">
          navigate_next
        </span>
      </div>
    </div>
  );
}

export default Slot;
