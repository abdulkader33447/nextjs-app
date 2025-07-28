// import { redirect } from "next/navigation";
import React from "react";

export const dynamic = "force-dynamic";

const ProductsPage = async () => {
  const { NEXT_PUBLIC_SERVER_ADDRESS } = process.env;
  console.log(NEXT_PUBLIC_SERVER_ADDRESS);
  const res = await fetch(`${NEXT_PUBLIC_SERVER_ADDRESS}/api/items`);
  //  console.log(res?.data);
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
