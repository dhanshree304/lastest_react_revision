const { Router } = require("express");



const bookRouter = Router()

bookRouter.get("/",(req,res)=>{
res.send("home page getted")
})

bookRouter.post("/", (req, res) => {});

bookRouter.patch("/", (req, res) => {});

bookRouter.delete("/", (req, res) => {});


module.exports={bookRouter}