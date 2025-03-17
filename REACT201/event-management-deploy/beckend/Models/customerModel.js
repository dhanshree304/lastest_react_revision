const mongoose = require("mongoose");

const customerSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  number: { type: String, required: true },
  date: { type: String, required: true },
  location: { type: String, required: true },
  guests: { type: String, required: true },
  selectedOptions: [String],
  msg: { type: String, required: true },
});

const customerModel = mongoose.model("customer", customerSchema);

module.exports = { customerModel };
