// import { redirect } from "next/navigation";
import dbConnect from "@/lib/dbConnect";
import React from "react";
import { getProducts } from "../actions/getProducts";

// export const dynamic = "force-dynamic";

const ProductsPage = async () => {
  // const { NEXT_PUBLIC_SERVER_ADDRESS } = process.env;
  // const res = await fetch(`${NEXT_PUBLIC_SERVER_ADDRESS}/api/items`);
  // const data = await res.json();

  const data = await getProducts()

  // if(data?.length > 5){

  //     redirect("/")
  // }
  return (
    <div className="p-5">
      <h1 className="text-xl font-bold my-5">ProductsPage</h1>
      <ul>
        {data?.map((product) => {
          return <li key={product?._id}>{product?.productName}</li>;
        })}
      </ul>
    </div>
  );
};

export default ProductsPage;
