"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

const Aboutpage = () => {
  const router = useRouter();
  const isLoggedIn = true;
  const handleNavigation = () => {
    if (isLoggedIn) {
      router.push("/about/address");
    } else {
      router.push("/");
    }
  };
  return (
    <div>
      <h1 className="text-2xl font-semibold">about page</h1>
      <Link href="/about/address">Address page</Link> <br />
      <button type="button" onClick={handleNavigation}>
        Address page
      </button>
    </div>
  );
};

export default Aboutpage;
