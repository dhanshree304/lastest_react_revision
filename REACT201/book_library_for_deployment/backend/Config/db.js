const mongoose = require("mongoose");
require("dotenv").config();
console.log(process.env.MONGODB_URL);
const connection = mongoose.connect(process.env.MONGODB_URL);

module.exports = { connection };
