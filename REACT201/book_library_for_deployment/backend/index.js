const express = require("express");
const jwt = require("jsonwebtoken");
const { connection } = require("./Config/db");
const bcrypt = require("bcrypt");
const { userModel } = require("./Models/userModel");
const { authentication } = require("./Middlewares/authentication");
const { authorization } = require("./Middlewares/authorization");
const { bookModel } = require("./Models/bookModel");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Home Page");
});

app.post("/signup", async (req, res) => {
  const { email, password, name, role } = req.body;
  bcrypt.hash(password, 5, async function (err, hashed_password) {
    if (err) {
      res
        .status(500)
        .json({ msg: "Something went wrong , please signup later" });
    }

    const new_user = new userModel({
      email: email,
      name: name,
      role: role,
      password: hashed_password,
    });

    await new_user.save();

    res.status(200).json({ msg: "Sign up successfull" });
  });
});

app.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await userModel.findOne({ email });
    if (!user) {
      res.status(500).json({ msg: "signup up please" });
      return 
    }
    const hashed_password = user.password;
   
    bcrypt.compare(password, hashed_password, function (err, result) {
      if (result) {
        const token = jwt.sign({ email: email }, "abcd12345"); //secret key

        res.status(200).json({ msg: "Login successful", token: token });
      } else {
        res.status(500).json({ msg: "Login falied" });
      }
    });
  } catch (error) {
   res.status(500).json({ msg: "Login falied" });
    
  }
  
});

//only authentication
// app.get("/book", async (req, res) => {
//   try {
//     const books = await bookModel.find({});
   
//     if (books) {
//       res.status(200).json({ books: books });
//     }
//   } catch (error) {
//     res.status(500).json({ msg: " falied to get books" });
//   }
// });

//needs authentication and authorization (seller-->allow to this route)
app.post(
  "/book/create",
  authentication,
  authorization("seller"),
  async (req, res) => {
    const { bookName, author, releaseYear, imageUrl, category } = req.body;

    try {
      const book = new bookModel({
        bookName,
        author,
        releaseYear,
        imageUrl,
        category,
      });

      await book.save();
      res.status(200).json({ msg: "book is added" });
    } catch (error) {
      res.status(500).json({ msg: "Something went wrong,failed to add book" });
    }
  }
);

app.patch(
  "/book/edit/:id",
  authentication,
  authorization("seller"),

  async (req, res) => {
    try {
      const { id } = req.params;
      const { bookName, author, releaseYear, imageUrl, category } = req.body;
      const newBook = {
        ...(bookName && { bookName }),
        ...(author && { author }),
        ...(releaseYear && { releaseYear }),
        ...(imageUrl && { imageUrl }),
        ...(category && { category }),
      };

      await bookModel.findOneAndUpdate({ _id: id }, newBook);

      res.status(200).json({ msg: "Book edited successfully" });
    } catch (error) {
      res.status(500).json({ msg: "Failed to edit book" });
    }
  }
);

app.get(
  "/book/:id",
  authentication,

  async (req, res) => {
    try {
      const { id } = req.params;
      console.log(req.params)
      const book = await bookModel.findOne({ _id: id });


      res.status(200).json({ book: book });
    } catch (error) {
      res.status(500).json({ msg: "Failed to get book" });
    }
  }
);

app.delete(
  "/book/delete/:id",
  authentication,
  authorization("seller"),

  async (req, res) => {
    try {
      const { id } = req.params;
      await bookModel.findOneAndDelete({ _id: id });

      res.status(200).json({ msg: "Book deleted successfully" });
    } catch (error) {
      res.status(500).json({ msg: "Failed to delete book" });
    }
  }
);

app.get("/book", async (req, res) => {
 
  try {
    let filter = {}; // Default: no filter applied

    // Filtering by category
    if (req.query.category) {
      const categories = req.query.category // Support multiple categories
     
      filter.category = { $in: categories };

    }

    // Sorting logic
    let sort = {};
    if (req.query.sortBy) {
      const order = req.query.order === "desc" ? -1 : 1; // Default is ascending
      sort[req.query.sortBy] = order;
    }
    let limit=4; 
    let page=1;
    if(req.query.limit && req.query.page){
      limit = Number(req.query.limit)
      page=Number(req.query.page)
    }
const skip=(page-1)*limit


    // Fetch books with filter and sorting
    const books = await bookModel.find(filter).sort(sort).skip(skip).limit(limit)
   
const totalCount=await bookModel.countDocuments(filter)
const totalPages=Math.ceil(totalCount/limit)


    res.status(200).json({ books: books,pagination:{page,limit,totalCount,totalPages} });
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
});


app.listen(3450, async () => {
  try {
    await connection;
    console.log("Connected to DB successfully");
  } catch (err) {
    console.log("Error connected to DB");
    console.log(err);
  }
  console.log("Listening on port 3450");
});
