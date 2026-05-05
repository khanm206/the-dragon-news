"use client";
import Link from "next/link";
import avatar from "@/assets/user.png";
import Image from "next/image";
import NavLink from "./NavLink";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";

const NavBar = () => {
  const { data: session, isPending } = authClient.useSession();
  const user = session?.user;
  const router = useRouter();
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
      {isPending ? (
        "Loading..."
      ) : user ? (
        <div className="flex items-center gap-4">
          <h2>Hello, {user.name}</h2>
          <Image
            src={user.image || avatar}
            alt="avatar"
            width={60}
            height={60}
          />
          <button
            onClick={async () => {
              await authClient.signOut();
              router.refresh();
            }}
            className="btn bg-base-300"
          >
            Logout
          </button>
        </div>
      ) : (
        <button className="btn bg-base-300">
          <Link href={"/login"}>Login</Link>
        </button>
      )}
    </div>
  );
};

export default NavBar;
