import { NavLink } from "react-router-dom";
import Button from "./Button";

function Navbar() {
  return (
    <nav className="flex h-20 w-full items-center justify-between bg-navbar  px-20 py-2">
      <div className="inline-flex items-center">
        <img
          className=" h-10 w-[250px]"
          src="/img/image 45.png"
          alt="company logo amrutam"
        />
        <div className="flex gap-9">
          <NavLink
            to="/homepage"
            className="ml-16 text-xl font-medium text-[#474747]"
          >
            Home
          </NavLink>
          <NavLink to="/" className="text-xl font-bold text-[#3A643B]">
            Find Doctors
          </NavLink>
          <NavLink to="/aboutus" className="text-xl font-medium text-[#474747]">
            About us
          </NavLink>
        </div>
      </div>
      <div className="flex gap-4">
        <NavLink to="/login">
          <Button className="border-[1px] border-[#3A643B] bg-navbar text-[#3A643B]">
            Login
          </Button>
        </NavLink>
        <NavLink to="/signup">
          <Button className="bg-[#3A643B] text-[#fff]">Sign-Up</Button>
        </NavLink>
      </div>
    </nav>
  );
}

export default Navbar;
