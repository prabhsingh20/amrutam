function ButtonSection() {
  return (
    <div className="mt-12 flex justify-end gap-3">
      <button className="flex items-center justify-center gap-1 rounded-full bg-[#DCEEDC] px-4 py-2 text-base font-normal ">
        Hair care
        <span className="material-symbols-outlined text-[#838383]">close</span>
      </button>
      <button className="flex items-center justify-center gap-1  rounded-full bg-[#DCEEDC] px-4 py-2 text-base font-normal">
        Female{" "}
        <span className="material-symbols-outlined text-[#838383]">close</span>
      </button>
      <button className="flex items-center justify-center gap-1  rounded-full bg-[#DCEEDC] px-4 py-2 text-base font-normal">
        Rs.0-Rs-500
        <span className="material-symbols-outlined text-[#838383]">close</span>
      </button>
      <button className="flex items-center justify-center gap-1  rounded-full bg-[#DCEEDC] px-4 py-2 text-base font-normal">
        Hindi{" "}
        <span className="material-symbols-outlined text-[#838383]">close</span>
      </button>
    </div>
  );
}

export default ButtonSection;
