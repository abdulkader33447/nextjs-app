import Link from "next/link";
import React from "react";

const NavBar = () => {
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
};

export default NavBar;
