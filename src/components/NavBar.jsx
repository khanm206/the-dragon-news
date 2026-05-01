import Link from "next/link";
import avatar from "@/assets/user.png";
import Image from "next/image";
import NavLink from "./NavLink";

const NavBar = () => {
  return (
    <div className="flex items-center justify-between my-6 text-lg font-semibold w-11/12 mx-auto">
      <div className="hidden md:flex"></div>
      <ul className="flex gap-6 text-black/50 text-xl">
        <li>
          <NavLink href={"/"}>Home </NavLink>
        </li>
        <li>
          <NavLink href={"/about"}>About</NavLink>
        </li>
        <li>
          <NavLink href={"/career"}>Career</NavLink>
        </li>
      </ul>
      <div className="flex items-center gap-4">
        <Image src={avatar} alt="avatar" />
        <button className="btn bg-base-300">
          <Link href={"/login"}>Login</Link>
        </button>
      </div>
    </div>
  );
};

export default NavBar;
