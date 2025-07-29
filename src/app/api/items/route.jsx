import dbConnect from "@/lib/dbConnect";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const data = await dbConnect("test").find({}).toArray();

    return NextResponse.json(data, { status: 200 });
  } catch (error) {
    console.error("GET API Error:", error);
    return NextResponse.json(
      { message: error.message || "Something went wrong!" },
      { status: 500 }
    );
  }
}

export async function POST(req) {
  
}
