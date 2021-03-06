const mongoose = require("mongoose");

// User Model
const UserSchema = new mongoose.Schema({
  googleId: { type: String, required: true },
  email: { type: String, required: true },
  displayName: { type: String, required: true },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  image: { type: String },
  password: { type: String },
  createdAt: { type: Date, default: Date.now() },
});

const User = mongoose.model("User", UserSchema);

module.exports = User;
