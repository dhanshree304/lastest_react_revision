const express = require("express");
const { connection } = require("./Config/db");
const { todoModel } = require("./Model/todoModel");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello");
});

app.post("/create-todo", async (req, res) => {
  const { title, status } = req.body;
  try {
    const new_todo = new todoModel({
      title,
      status,
    });
    await new_todo.save();
    res.send({ msg: "todo created successfully" });
  } catch (e) {
    res.send({ msg: "Something went wrong" });
  }
});

app.get("/get-todo", async (req, res) => {
  try {
    const todo = await todoModel.find({});
    res.send({ todo });
  } catch (error) {
    res.send({ msg: "Something went wrong" });
  }
});

app.patch("/update-todo/:id", async (req, res) => {
  const { id } = req.params;

  try {
    await todoModel.findOneAndUpdate({ _id: id }, req.body);
    res.send({ msg: " Todo Updated Successfully" });
  } catch (error) {
    res.send({ msg: "Error Can not update todo" });
  }
});


app.delete("/delete-todo/:id",async(req,res)=>{
const {id}= req.params;
try {
    const todo = await todoModel.findOneAndDelete({_id:id})
    if(todo){
        res.send({ msg: " todo deleted successfully" });
    }
} catch (error) {
    res.send({msg:"Error in deleting todo"})
}

})

app.listen(5089, async () => {
  try {
    await connection;
    console.log("connection to DB is successful");
  } catch (err) {
    console.log("Error connecting to db");
    console.log(err);
  }
  console.log("Listening on PORT 5089");
});
