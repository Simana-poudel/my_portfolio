import mongoose, { Schema } from 'mongoose';

// Create a Skill schema
const SingleProjectSchema = new Schema(
  {
    name: String,
    projectDescription: String
    
  },
  {
    _id: false, // Set _id to false since we don't need separate IDs for skills
  }
);

// Create an About schema that references the Skill schema
const allProjectSchema = new Schema(
  {
    title: String,
    description: String,
    projects: [SingleProjectSchema], // Use an array to store multiple skills
  },
  {
    timestamps: true,
  }
);

const projectSchema = new Schema(
  {
    title: String,
    description: String,
    allProjects: [allProjectSchema], // Use an array to store multiple skills
  },
  {
    timestamps: true,
  }
);

// Create the About model
const Project = mongoose.models.Project || mongoose.model('Project', projectSchema);

export default Project;
