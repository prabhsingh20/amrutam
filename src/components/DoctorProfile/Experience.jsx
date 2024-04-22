function Experience() {
  return (
    <div className="overflow-hidden rounded-2xl border-[1px] border-[#DCDCDC]">
      <header className="flex items-center justify-between  bg-gradient-to-l from-[#FBFCFB] to-[#F4F7EC] px-8 py-3">
        <h2 className="text-2xl font-semibold text-[#313131]">
          My Work Experience
        </h2>
      </header>
      <main className="mt-8 px-8 pb-6">
        <h4 className="w-[450px] border-b-[1px] border-[#D1D5D1] pb-5 text-lg font-semibold uppercase text-[#3A643B]">
          I have been in practice for : 7+ Years
        </h4>
        <div className="flex w-[450px]  justify-between pt-4">
          <div className="flex items-center justify-between gap-5">
            <span className="material-symbols-outlined bg-[#F7F7FC] p-2 text-blue-900">
              home_work
            </span>
            <div className="grid gap-1">
              <h6 className="text-base font-medium text-[#333548]">
                Midtown Medical Clinic
              </h6>
              <p className="text-base font-medium text-[#939393]">
                Senior doctor
              </p>
            </div>
          </div>
          <p className="text-base font-normal text-[#939393]">2016-PRESENT</p>
        </div>
        <div className="flex w-[450px]  justify-between pt-4">
          <div className="flex items-center justify-between gap-5">
            <span className="material-symbols-outlined bg-[#F7F7FC] p-2 text-blue-900">
              home_work
            </span>
            <div className="grid gap-1">
              <h6 className="text-base font-medium text-[#333548]">
                Midtown Medical Clinic
              </h6>
              <p className="text-base font-medium text-[#939393]">
                Senior doctor
              </p>
            </div>
          </div>
          <p className="text-base font-normal text-[#939393]">2010-2015</p>
        </div>
      </main>
    </div>
  );
}

export default Experience;
