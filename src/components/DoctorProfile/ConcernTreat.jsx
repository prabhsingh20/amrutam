function ConcernTreat() {
  return (
    <div className="rounded-lg border-[1px] border-[#DCDCDC]">
      <header className="flex items-center justify-between  bg-gradient-to-l from-[#FBFCFB] to-[#F4F7EC] px-8 py-3">
        <h2 className="text-2xl font-semibold text-[#313131]">
          The Concerns I Treat
        </h2>
      </header>
      <main className="grid grid-cols-4 gap-2 gap-y-5 px-4 py-6">
        <button className="rounded-full bg-[#F7F7FC] p-2 text-base font-medium text-[#3A643B] ">
          Skin Treatment
        </button>
        <button className="rounded-full bg-[#F7F7FC] p-2 text-base font-medium text-[#3A643B] ">
          Pregnancy
        </button>
        <button className="rounded-full bg-[#F7F7FC] p-2 text-base font-medium text-[#3A643B] ">
          Period Doubts
        </button>
        <button className="rounded-full bg-[#F7F7FC] p-2 text-base font-medium text-[#3A643B] ">
          Endometriosis
        </button>
        <button className="rounded-full bg-[#F7F7FC] p-2 text-base font-medium text-[#3A643B] ">
          Pelvic Pain
        </button>
        <button className="rounded-full bg-[#F7F7FC] p-2 text-base font-medium text-[#3A643B] ">
          Ovarisn Cysts
        </button>
        <button className="rounded-full border-[1px] border-[#E0DFDF] bg-white text-base font-medium text-[#3A643B] ">
          + 5 More
        </button>
      </main>
    </div>
  );
}

export default ConcernTreat;
