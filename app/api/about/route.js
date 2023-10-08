import connectMongoDB from "@/libs/mongodb";
import About from "@/models/about";
import { NextResponse } from "next/server";

export async function POST(request) {
  const { description, question, questionDescription, skills} = await request.json();
  await connectMongoDB();
  await About.create({ description, question, questionDescription, skills});
  return NextResponse.json({ message: "About section Created"}, { status: 201});
}

export async function GET() {
  await connectMongoDB();
  const abouts = await About.find();
  return NextResponse.json({abouts});
}

