import mongoose, { Schema } from "mongoose";

const UserSchema: Schema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
  role: { type: String, default: "user", enum: ["user", "admin"] },
  password: { type: String, required: true },
});

const User = mongoose.model("user", UserSchema);
export default User;
