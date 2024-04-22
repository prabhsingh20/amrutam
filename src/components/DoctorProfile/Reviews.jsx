function Reviews() {
  return (
    <div className="overflow-hidden rounded-2xl border-[1px] border-[#DCDCDC]">
      <header className="flex items-center justify-between  bg-gradient-to-l from-[#FBFCFB] to-[#F4F7EC] px-8 py-3">
        <h2 className="text-2xl font-semibold text-[#313131]">
          Featured Reviews (102)
        </h2>
      </header>
      <main className=" mt-8 grid gap-4 px-8 pb-6">
        <section className="rounded-lg bg-[#FAFAFA] pb-2">
          <div className="flex items-center justify-between px-7 pb-3 pt-5">
            <div className="flex">
              <img src="/img/profile3.png" alt="person image" />
              <div className="pl-2">
                <h2 className="text-xl font-semibold text-[#2F2F2F]">
                  Alicent Hightower
                </h2>
                <p className="text-base font-medium text-[#939393]">
                  Consulted for Skin care
                </p>
              </div>
            </div>
            <p className="text-base font-normal text-[#979797]">
              20 January 2023
            </p>
          </div>
          <span className="px-7">⭐⭐⭐⭐⭐</span>
          <p className="px-7 py-2 text-base font-normal text-[#2E2F2E]">
            Might be bit early to confirm but yes I can see noticeable
            difference in my hairfall. will write again after using it for
            longer periods
          </p>
        </section>
        <section className="rounded-lg bg-[#FAFAFA] pb-2">
          <div className="flex items-center justify-between px-7 pb-3 pt-5">
            <div className="flex">
              <img src="/img/profile3.png" alt="person image" />
              <div className="pl-2">
                <h2 className="text-xl font-semibold text-[#2F2F2F]">
                  Alicent Hightower
                </h2>
                <p className="text-base font-medium text-[#939393]">
                  Consulted for Pregnancy
                </p>
              </div>
            </div>
            <p className="text-base font-normal text-[#979797]">
              20 January 2023
            </p>
          </div>
          <span className="px-7">⭐⭐⭐⭐⭐</span>
          <p className="px-7 py-2 text-base font-normal text-[#2E2F2E]">
            Might be bit early to confirm but yes I can see noticeable
            difference in my hairfall. will write again after using it for
            longer periods
          </p>
        </section>
      </main>
    </div>
  );
}

export default Reviews;
