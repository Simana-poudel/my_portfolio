import mongoose, { Schema } from 'mongoose';

// Create an User schema that references the Skill schema
const UserDataSchema = new Schema(
  {
    intro: String,
    profession: String,
    bio: String,
  },
  {
    timestamps: true,
  }
);

// Create the About model
const UserData = mongoose.models.UserData || mongoose.model('UserData', UserDataSchema);

export default UserData;
