"use client";
import { usePathname,useRouter } from "next/navigation";
// import {  } from "next/router";
import React, { useEffect, useState } from "react";

const MealSearch = () => {
  // const [meals, setMeals] = useState([]);
  const [search, setSearch] = useState("");
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const searchQuery = { search };
    const urlQueryParam = new URLSearchParams(searchQuery);
    const url = `${pathname}?${urlQueryParam}`
    router.push(url)
  }, [search]);
  return (
    <div>
      <div className="flex justify-center">
        <input
          type="search"
          className="border"
          onChange={(e) => setSearch(e.target.value)}
        />
        <button className="btn">Search</button>
      </div>
    </div>
  );
};

export default MealSearch;
