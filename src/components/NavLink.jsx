"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const NavLink = ({ href, children }) => {
  const pathname = usePathname();
  let style = "";
  if (pathname === href) {
    style = "border-b";
  }
  return (
    <Link className={style} href={href}>
      {children}
    </Link>
  );
};

export default NavLink;
