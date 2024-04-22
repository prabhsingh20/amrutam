import Button from "../Button";

function ProfileHeader() {
  return (
    <header className="px-14 py-10">
      <div className="">
        <div className="h-[128px] overflow-hidden rounded-t-xl">
          <img src="/img/bg2.png" alt="doctor image" className="w-full" />
        </div>
        <div className="relative flex h-[138px] w-full items-center justify-between border-[1px] border-[#D8D8D8] bg-[#FFFBF2] pl-52 pr-8">
          <img
            src="/img/profile2.png"
            alt=""
            className="absolute -top-10 left-6"
          />
          <div>
            <h4 className="flex items-center text-xl font-medium text-[#212529]">
              Dr. Bruce Willis
              <span className="material-symbols-outlined pl-1">verified</span>
            </h4>
            <p className="text-base   text-[#3A643B]">Gynecologist</p>
            <p className="text=[#626262] mt-2 text-base font-semibold">
              4.2 <span>⭐⭐⭐⭐</span>
            </p>
          </div>
          <div>
            <h6 className="text-sm font-medium text-[#3A643B]">Followers</h6>
            <p className="text-center text-xl  font-semibold text-[#212529]">
              850
            </p>
          </div>
          <div>
            <h6 className="text-sm font-medium text-[#3A643B]">Following</h6>
            <p className="text-center text-xl font-semibold  text-[#212529]">
              18K
            </p>
          </div>
          <div>
            <h6 className="text-sm font-medium text-[#3A643B]">Posts</h6>
            <p className="text-center text-xl font-semibold  text-[#212529]">
              250
            </p>
          </div>
          <Button className="bg-[#3A643B]  text-[#fff]">
            Book an Appointment
          </Button>
        </div>
      </div>
    </header>
  );
}

export default ProfileHeader;
