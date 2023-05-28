
const express = require("express");

const UserDBModel = require("../models/UserModel");

const router = express.Router();

router.post("/signup", async (req, res, next) => {
  try {
    console.log(req.body);
    const { email } = req.body;


    const result = await UserDBModel.findOne({email: email});

    if (result) {
        res.send({ message: "Email id is already register", alert: false });
      } else {
        const data = UserDBModel(req.body);
        const save = data.save();
        res.send({ message: "Successfully sign up", alert: true });
      }
  } catch (err) {
    next(err);
  }
});

router.post('/login', async (req, res, next) => {
    try {   
         console.log(req.body);
  const { email } = req.body;
  const result = await UserDBModel.findOne({ email: email });

  
    if (result) {
      const dataSend = {
        _id: result._id,
        firstName: result.firstName,
        lastName: result.lastName,
        email: result.email,
        image: result.image,
      };
      console.log(dataSend);
      res.send({
        message: "Login is successfully",
        alert: true,
        data: dataSend,
      });
    } else {
      res.send({
        message: "Email is not available, please sign up",
        alert: false,
      });
    }
  

    } catch (err) {
        next(err)
    }
})

module.exports = router;



// //api login
// app.post("/login", (req, res) => {
//  
// });
