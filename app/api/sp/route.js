import connectMongoDB from "@/libs/mongodb";
import User from "@/models/user";
import { NextResponse } from "next/server";

export async function POST(request) {
  const { user, password} = await request.json();
  await connectMongoDB();
  await User.create({ user, password});
  return NextResponse.json({ message: "User Created"}, { status: 201});
}

export async function GET() {
  await connectMongoDB();
  const user = await User.find();
  return NextResponse.json({user});
}

