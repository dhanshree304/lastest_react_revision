const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  email: { type: String, required: true },
  password: { type: String, required: true },
  name: { type: String, required: true },
  role: { type: String, enum: ["seller", "customer"], default: "customer" },
});

const userModel = mongoose.model("user", userSchema);

module.exports = { userModel };
