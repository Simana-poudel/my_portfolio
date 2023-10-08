import mongoose, { Schema } from 'mongoose';

// Create a Skill schema
const skillSchema = new Schema(
  {
    name: String,
    percentage: Number,
  },
  {
    _id: false, // Set _id to false since we don't need separate IDs for skills
  }
);

// Create an About schema that references the Skill schema
const aboutSchema = new Schema(
  {
    description: String,
    question: String,
    questionDescription: String,
    skills: [skillSchema], // Use an array to store multiple skills
  },
  {
    timestamps: true,
  }
);

// Create the About model
const About = mongoose.models.About || mongoose.model('About', aboutSchema);

export default About;
