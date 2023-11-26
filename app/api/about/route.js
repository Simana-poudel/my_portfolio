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

export async function PUT(request) {
  const { _id, description, question, questionDescription, skills } = await request.json();
  await connectMongoDB();

  try {
    const updatedAbout = await About.findByIdAndUpdate(
      _id,
      { description, question, questionDescription, skills },
      { new: true } // This option returns the modified document, not the original one
    );

    if (updatedAbout) {
      return NextResponse.json({ message: "About section Edited" }, { status: 200 });
    } else {
      return NextResponse.json({ message: "About section not found" }, { status: 404 });
    }
  } catch (error) {
    console.error("Error updating about section:", error);
    return NextResponse.error({ status: 500 });
  }
}