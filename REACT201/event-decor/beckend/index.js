const express = require("express");
const { connection } = require("./Config/db");
const nodemailer = require("nodemailer");
const { customerModel } = require("./Models/customerModel");

const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello");
});




// const transporter = nodemailer.createTransport({
//   host: "smtp.gmail.com",
//   port: 587, // Change to 587 if needed
//   secure: false, // Use true for port 465, false for 587
//   auth: {
//     user: "dhanshreeupadhye0@gmail.com",
//     pass: "ormjmcvggqzpbyav", // Ensure this is an App Password, not your Gmail password
//   },
// });

app.post("/customerInfo", async (req, res) => {
  const { name, email, number, date, location, guests, selectedOptions, msg } =
    req.body;
  console.log(req.body)
  try {
    const customerInfo = new customerModel({
      name,
      email,
      number,
      date,
      location,
      guests,
      selectedOptions,
      msg,
    });
    // const info = await transporter.sendMail({
    //   from: '"Test" <dhanshreeupadhye0@gmail.com>',
    //   to: "dhanshreeupadhye0@gmail.com",
    //   subject: `new message from ${name}, for event Decore`,
    //   text: `Hi,my name is ${name}, my conatct no is ${number} , i want your service on ${date} at location ${location},with maximum number of guests:${guests} .${msg}`,
    // });
    await customerInfo.save();
    res
      .status(200)
      .json({
        msg: "customer is added successfully and email sended",
        // email_res: info.response,
      });
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ msg: "Something went wrong,failed to add custerInfo" });
  }
});

app.listen(8081, async () => {
  try {
    await connection;
    console.log("connection to DB is successful");
  } catch (err) {
    console.log("Error connecting to db");
    console.log(err);
  }
  console.log("Listening on PORT 8081");
});
