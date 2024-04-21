function Session() {
  return (
    <div>
      <div className="flex items-center justify-between py-8">
        <h4 className="text-xl font-bold">Select your mode of session</h4>
        <div className=" w-56 border-b-[1px] border-b-[#D4D4D4]"></div>
      </div>
      <div className="flex justify-between">
        <button className="flex w-40 flex-col items-center gap-1 rounded-xl border-[1px] border-[#DCDCDC] px-9 py-2 text-base font-normal">
          <p className="text-base font-medium text-[#1F1F1F]">In-Clinic</p>
          <p className="text-base font-normal text-[#606060]">45 Mins</p>
        </button>
        <button className="flex w-40 flex-col items-center gap-1 rounded-xl border-[1px] border-[#3A643B] bg-[#F2FBF2] px-9 py-2 text-base font-normal">
          <p className="flex items-center text-lg font-medium text-[#3A643B] ">
            Video
            <span className="material-symbols-outlined ml-2 rounded-full bg-[#3A643B] text-white">
              check
            </span>
          </p>
          <p className="text-base font-normal text-[#606060]">45 Mins</p>
        </button>
        <button className="flex w-40 flex-col items-center  gap-1 rounded-xl border-[1px] border-[#DCDCDC] px-9 py-2 text-base font-normal">
          <p className="text-base font-medium text-[#1F1F1F]">Chat</p>
          <p className="text-base font-normal text-[#606060]">10 Mins</p>
        </button>
      </div>
    </div>
  );
}

export default Session;
