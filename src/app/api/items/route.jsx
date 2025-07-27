import dbConnect from "@/lib/dbConnect";
import { revalidatePath } from "next/cache";

export async function GET() {
  const data = await dbConnect("test").find({}).toArray();

  return Response.json(data);
}

export async function POST(req) {
  const postedData = await req.json();
  const result = await dbConnect("test").insertOne(postedData)
  // revalidatePath("/products")
  
  // console.log(req);

  return Response.json(result);
}
