import mongoose from "mongoose";

const UserSchema = mongoose.Schema({
  username: String,
  email: String,
  password: String,
  createdAt: String,
});

export default mongoose.model("User", UserSchema);
