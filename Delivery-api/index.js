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







// /*****payment getWay */
// console.log(process.env.STRIPE_SECRET_KEY)

// const stripe  = new Stripe(process.env.STRIPE_SECRET_KEY)

// app.post("/create-checkout-session",async(req,res)=>{

//      try{
//       const params = {
//           submit_type : 'pay',
//           mode : "payment",
//           payment_method_types : ['card'],
//           billing_address_collection : "auto",
//           shipping_options : [{shipping_rate : "shr_1N0qDnSAq8kJSdzMvlVkJdua"}],

//           line_items : req.body.map((item)=>{
//             return{
//               price_data : {
//                 currency : "inr",
//                 product_data : {
//                   name : item.name,
//                   // images : [item.image]
//                 },
//                 unit_amount : item.price * 100,
//               },
//               adjustable_quantity : {
//                 enabled : true,
//                 minimum : 1,
//               },
//               quantity : item.qty
//             }
//           }),

//           success_url : `${process.env.FRONTEND_URL}/success`,
//           cancel_url : `${process.env.FRONTEND_URL}/cancel`,

//       }

//       const session = await stripe.checkout.sessions.create(params)
//       // console.log(session)
//       res.status(200).json(session.id)
//      }
//      catch (err){
//         res.status(err.statusCode || 500).json(err.message)
//      }

// })
