const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
  bookName: { type: String, required: true },
  author: { type: String, required: true },
  category: { type: String, required: true },
  releaseYear: { type: Number, required: true },
  imageUrl: { type: String, required: true },
});

const bookModel = mongoose.model("book", bookSchema);

module.exports = { bookModel };
