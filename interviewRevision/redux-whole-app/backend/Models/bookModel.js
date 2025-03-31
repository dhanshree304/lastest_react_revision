

const mongoose = require("mongoose")

const bookSchema = new mongoose.Schema({
  imageUrl: { type: String, required: true },
  title: { type: String, required: true },
  category: { type: String, required: true },
  price: { type:Number, required: true },

});


const bookModel= mongoose.Model("book",bookSchema)

module.exports = {bookModel}