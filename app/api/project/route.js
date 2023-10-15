import connectMongoDB from "@/libs/mongodb";
import Project from "@/models/project";
import { NextResponse } from "next/server";

export async function POST(request) {
  const { title, description, allProjects} = await request.json();
  await connectMongoDB();
  await Project.create({ title, description, allProjects});
  return NextResponse.json({ message: "Project section Created"}, { status: 201});
}

export async function GET() {
  await connectMongoDB();
  const projects = await Project.find();
  return NextResponse.json({projects});
}

