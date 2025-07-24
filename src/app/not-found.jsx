import Link from "next/link";
import React from "react";

const notFound = () => {
  return (
    <div className="flex justify-center  w-full h-full">
      <div>
        <h1>404 Not Found</h1>
        <Link href="/">Go Back To Home</Link>
      </div>
    </div>
  );
};

export default notFound;
