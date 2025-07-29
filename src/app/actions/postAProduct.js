"use server";

import dbConnect from "@/lib/dbConnect";
import { revalidatePath } from "next/cache";

export const postAProduct = async (postedData) => {
  try {
    // const postedData = await req.json();
    const result = await dbConnect("test")
      .insertOne(postedData)
      .revalidatePath("/products");
    return { success: true, insertedId: result.insertedId };
  } catch (error) {
    console.error("POST API Error:", error);
    return { success: false, message: error.message };
  }
};
