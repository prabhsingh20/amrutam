function AboutMe() {
  return (
    <div className="overflow-hidden rounded-xl border-[1px] border-[#DCDCDC] pb-5">
      <header className="flex items-center justify-between  bg-gradient-to-l from-[#FBFCFB] to-[#F4F7EC] px-8 py-3 ">
        <h2 className="text-2xl font-semibold text-[#313131]">
          A Little About Me
        </h2>
        <button
          className="flex items-center rounded-lg border-[1px] border-[#3A643B] bg-white px-5 py-1 text-base font-medium
text-[#585858] "
        >
          Follow <span className="material-symbols-outlined">add</span>
        </button>
      </header>
      <main className="pl-8">
        <p className=" pr-10 pt-8 text-base font-medium text-[#646665]">
          Hello I am Dr. Bruce Willis a Gynaecologist in Sanjivni Hospital
          Surat. love to work with all my hospital staff and seniour doctors.
          Completed my graduation in Gynaecologist Medicine from the
        </p>
        <div className="mt-3 flex items-center justify-between pr-12">
          <div className=" w-[430px] border-b-[1px] border-b-[#797979]"></div>
          <p className="text-base font-medium text-[#2B2B2B] underline">
            Read More
          </p>
        </div>
        <div className="mt-7 flex items-center justify-between pr-20">
          <h4 className="text-xl font-medium">Language Spoken</h4>
          <button className="rounded-full bg-[#F7F7FC] px-4 py-2 text-base font-normal ">
            English
          </button>
          <button className="rounded-full bg-[#F7F7FC] px-4 py-2 text-base font-normal ">
            Hindi
          </button>
          <button className="rounded-full bg-[#F7F7FC] px-4 py-2 text-base font-normal ">
            Telugu
          </button>
        </div>
      </main>
    </div>
  );
}

export default AboutMe;
