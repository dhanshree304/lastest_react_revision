


const express = require("express")
const { connection } = require("./Config/db")
const userRouter = require("./Routers/userRouter")
const cors = require("cors")
const { bookRouter } = require("./Routers/bookRouter")

const app = express()
app.use(express.json())
app.use(cors())

app.use("/user",userRouter);
app.use("/books", bookRouter);

app.listen(9087,async()=>{
    try {
        await connection
        console.log("Connected to DB successfully ",9087)
    } catch (error) {
        console.log("Error in connecting to DB",error)
        
    }
})