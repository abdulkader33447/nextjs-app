"use client";
import { useRouter } from "next/navigation";
import React from "react";

const ProductAddForm = () => {
  const { NEXT_PUBLIC_SERVER_ADDRESS } = process.env;
  const router = useRouter();
  const hadleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const productName = form.productName.value;
    const payload = { productName };
    const res = await fetch(`${NEXT_PUBLIC_SERVER_ADDRESS}/api/items`, {
      method: "POST",
      body: JSON.stringify(payload),
      headers: {
        "Content-type": "application/json",
      },
    });
    const result = await res.json();
    console.log(result);
    form.reset();
    // alert("product added")
    router.push("/products");
  };
  return (
    <div>
      <h1>Product Add Form</h1>
      <form onSubmit={hadleSubmit}>
        <input type="text" name="productName" className="border" />
        <button type="submit" className="cursor-pointer ml-2">
          Submit
        </button>
      </form>
    </div>
  );
};

export default ProductAddForm;
