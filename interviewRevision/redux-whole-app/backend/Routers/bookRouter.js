const { Router } = require("express");
const { bookModel } = require("../Models/bookModel");

const bookRouter = Router();

bookRouter.get("/", async (req, res) => {
  try {
    let filter = {}; // Default: no filter applied

    // Filtering by category
    if (req.query.category) {
      const categories = req.query.category; // Support multiple categories

      filter.category = { $in: categories }; //
    }

    const sort = {};

    if (req.query.sortBy) {
      const order = req.query.order === "desc" ? -1 : 1;
      sort[req.query.sortBy] = order;
    }

    let limit = 4;
    let page = 1;
    if (req.query.limit && req.query.page) {
      limit = Number(req.query.limit); //limit aani page la update krtoy so take let wont be work with const
      page = Number(req.query.page);
    }

    const skip = (page - 1) * limit;
    const totalCounts = await bookModel.countDocuments(filter);
    const totalPages = Math.ceil(totalCounts / limit);

    const books = await bookModel
      .find(filter)
      .sort(sort)
      .limit(limit)
      .skip(skip);

    res
      .status(200)
      .json({ books, pagination: { page, limit, totalCounts, totalPages } });
  } catch (error) {}
});

bookRouter.post("/add", async (req, res) => {
  const { category, title, price, imageUrl } = req.body;

  try {
    const new_book = new bookModel({
      category,
      title,
      price,
      imageUrl,
    });
    const newBook = await new_book.save();
    res.status(200).json({ msg: "Book is added successfully" });
  } catch (error) {
    res.status(500).josn({ msg: "Unable to add book in the database" });
  }
});

bookRouter.patch("/edit/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const editedBook = await bookModel.findOneAndUpdate({ _id: id }, req.body); //update ho jayegi
    res.status(200).json({ msg: "Updated book successfully" });
  } catch (error) {
    res.status(500).json({ msg: "Unable to update the book" });
  }
});

bookRouter.delete("/delete/:id", async(req, res) => {
    const {id} = req.params;
    try {
        await bookModel.findOneAndDelete({_id:id})
        res.status(200).json({msg:"Book deleted successfully"})
    } catch (error) {
        res.status(500).json({msg:"Unable to delete the book"})
    }


});

module.exports = { bookRouter };
