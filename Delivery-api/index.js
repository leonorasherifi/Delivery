const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const dotenv = require("dotenv").config();

const app = express();
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);
app.use(express.json({ limit: "10mb" }));

const routes = require("./routes/index");

const PORT = process.env.PORT || 8080;

mongoose.set("strictQuery", false);
mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => console.log("Connected to Database"))
  .catch((err) => console.log(err));

routes(app); // Register routes

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

// const express = require("express");
// const cors = require("cors");
// const mongoose = require("mongoose");
// const dotenv = require("dotenv").config();
// const Stripe = require('stripe')

// const app = express();
// app.use(cors());
// app.use(express.json({ limit: "10mb" }));

// const PORT = process.env.PORT || 8080;

// // //mongodb connection
// mongoose.set("strictQuery", false);
// mongoose
//   .connect(process.env.MONGODB_URL)
//   .then(() => console.log("Connect to Databse"))
//   .catch((err) => console.log(err));

// //server is ruuning
// app.listen(PORT, () => console.log("server is running at port : " + PORT));
// //schema







