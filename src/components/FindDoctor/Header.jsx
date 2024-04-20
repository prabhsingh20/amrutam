import Select from "../Select";

function Header() {
  return (
    <header className="bg-pattern  h-52 bg-contain  ">
      <div className="relative flex h-full flex-col items-center justify-center gap-6 text-center">
        <h1 className=" text-3xl font-normal">
          Find Expert Doctors For An In-Clinic Session Here
        </h1>
        <div className="flex gap-2">
          <Select
            name="search location"
            id="location"
            className="border-[1px] border-[#D4D4D4] pl-9 pr-2"
          >
            <option value="">Search Loaction</option>
            <option value="">Indore</option>
            <option value="">Bhopal</option>
          </Select>
          <input
            className=" w-96 rounded-lg border-[1px] border-[#D4D4D4] px-5 py-2 text-sm text-[#767676] outline-none "
            type="text"
            placeholder="eg. Doctor, specialisation, clinic name"
          />
          <span className="material-symbols-outlined absolute right-96 top-[122px] cursor-pointer">
            arrow_forward
          </span>
          <span className="material-symbols-outlined absolute top-[122px] pl-2 text-[#3A643B]">
            location_on
          </span>
        </div>
      </div>
    </header>
  );
}

export default Header;
