"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const NavBar = () => {
  const pathname = usePathname();

  if (pathname.startsWith("/dashboard")) return null;

  return (
    <nav>
      <ul className="flex justify-center gap-8">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/posts" prefetch={false}>
            Posts
          </Link>
        </li>
        <li>
          <Link href="/meals" prefetch={false}>
            Meals
          </Link>
        </li>
        <li>
          <Link href="/products/addProducts" prefetch={false}>
            Add Products
          </Link>
        </li>
        <li>
          <Link href="/products" prefetch={false}>
            Products
          </Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
