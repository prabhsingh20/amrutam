function MorningTiming() {
  return (
    <div>
      <div className="flex items-center justify-between py-4 pt-8">
        <h4 className="pl-4 text-lg font-bold">Morning</h4>
      </div>
      <div className="flex flex-wrap gap-3">
        <button className="rounded-3xl border-[1px] border-[#DCDCDC] px-4 py-5 text-base font-normal text-[#131313]">
          09:00 AM
        </button>
        <button className="rounded-3xl border-[1px] border-[#DCDCDC] px-4 py-5 text-base font-normal text-[#131313]">
          09:30 AM
        </button>
        <button className="rounded-3xl border-[1px] border-[#DCDCDC] px-4 py-5 text-base font-normal text-[#131313]">
          10:00 AM
        </button>
        <button className="rounded-3xl border-[1px] border-[#DCDCDC] px-4 py-5 text-base font-normal text-[#131313]">
          10:15 AM
        </button>
        <button className="rounded-3xl border-[1px] border-[#DCDCDC] px-4 py-5 text-base font-normal text-[#131313]">
          10:45 AM
        </button>
        <button className="rounded-3xl border-[1px] border-[#DCDCDC] bg-[#3A643B] px-4 py-5 text-base font-normal text-white">
          11:00 AM
        </button>
      </div>
    </div>
  );
}

export default MorningTiming;
