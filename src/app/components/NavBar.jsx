"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const NavBar = () => {
  const pathname = usePathname();
  console.log(pathname, pathname.includes("dashboard"));
  if (!pathname.includes("dashboard")) {
    return (
      <div>
        <nav>
          <ul className="flex justify-center gap-8">
            <Link href="/">
              <li>Home</li>
            </Link>
            <Link href="/services">
              <li>Service</li>
            </Link>
            <Link href="/about">
              <li>About</li>
            </Link>
          </ul>
        </nav>
      </div>
    );
  } else {
    return <></>;
  }
};

export default NavBar;
