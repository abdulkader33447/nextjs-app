import dbConnect from "@/lib/dbConnect";
import { ObjectId } from "mongodb";

export async function GET(req, { params }) {
  const p = await params;
  const singleData = await dbConnect("test").findOne({
    _id: new ObjectId(p.id),
  });

  return Response.json(singleData);
}

//PATCH
export async function PATCH(req, { params }) {
  const p = await params;
  // console.log("uptade function", p);
  const postedData = await req.json();
  const filter = { _id: new ObjectId(p.id) };
  const updatedData = await dbConnect("test").updateOne(filter, {
    $set: { ...postedData },
  },{upsert:true});

  return Response.json(updatedData);
}

//delete
export async function DELETE(req, { params }) {
  const p = await params;
  console.log("from delete function",p);
  const singleData = await dbConnect("test").deleteOne({
    _id: new ObjectId(p.id),
  });

  return Response.json(singleData);
}
