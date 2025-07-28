// import { redirect } from "next/navigation";
import React from "react";

const ProductsPage = async () => {
  const res = await fetch("http://localhost:3000/api/items", {
    // cache: "force-cache",
  });
  const data = await res.json();

  // if(data?.length > 5){

  //     redirect("/")
  // }
  return (
    <div className="p-5">
      <h1>ProductsPage</h1>
      <ul>
        {data?.map((product) => {
          return <li key={product?._id}>{product?.productName}</li>;
        })}
      </ul>
    </div>
  );
};

export default ProductsPage;
