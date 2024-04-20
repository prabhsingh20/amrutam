import Select from "../Select";

function SelectSection() {
  return (
    <div className="flex justify-evenly border-b-[1px] border-[#F3F3F3] px-28 pb-3 pt-4">
      <Select className="bg-[#F3F3F3] pl-2 pr-7">
        <option value="experties">Experties</option>
        <option value="options">Options...</option>
      </Select>
      <Select className="bg-[#F3F3F3] pl-2 pr-7">
        <option value="gender">Gender</option>
        <option value="male">Male</option>
        <option value="female">Female</option>
      </Select>
      <Select className="bg-[#F3F3F3] pl-2 pr-7">
        <option value="fees">Fees</option>
        <option value="100">₹100</option>
      </Select>
      <Select className="bg-[#F3F3F3] pl-2 pr-7">
        <option value="lang">Languages</option>
        <option value="hindi">Hindi</option>
        <option value="english">English</option>
      </Select>
      <Select className="bg-[#DCEEDC] pl-2 pr-7">
        <option value="filters">All Filters</option>
        <option value="options">Options...</option>
      </Select>
    </div>
  );
}

export default SelectSection;
