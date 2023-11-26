import connectMongoDB from "@/libs/mongodb";
import UserData from "@/models/userdata";
import { NextResponse } from "next/server";

export async function POST(request) {
  const { intro, profession, bio} = await request.json();
  await connectMongoDB();
    try {
      await UserData.create({ intro, profession, bio});
      return NextResponse.json({ message: "User data Created"}, { status: 201});
    } catch (error) {
      console.log(error);
    }
 
}

export async function GET() {
  await connectMongoDB();
  const userdata = await UserData.find();
  return NextResponse.json({userdata});
}

// export async function PUT(request) {
//   const { _id, description, question, questionDescription, skills } = await request.json();
//   await connectMongoDB();

//   try {
//     const updatedAbout = await About.findByIdAndUpdate(
//       _id,
//       { description, question, questionDescription, skills },
//       { new: true } // This option returns the modified document, not the original one
//     );

//     if (updatedAbout) {
//       return NextResponse.json({ message: "About section Edited" }, { status: 200 });
//     } else {
//       return NextResponse.json({ message: "About section not found" }, { status: 404 });
//     }
//   } catch (error) {
//     console.error("Error updating about section:", error);
//     return NextResponse.error({ status: 500 });
//   }
// }