const express = require('express');

const router = express.Router();


// /*****payment getWay */
// console.log(process.env.STRIPE_SECRET_KEY)

// const stripe  = new Stripe(process.env.STRIPE_SECRET_KEY)

// app.post("/create-checkout-session",async(req,res)=>{


// })

router.get('/', async (_req, res, next) => {
    try {
            //  try{
    //   const params = {
    //       submit_type : 'pay',
    //       mode : "payment",
    //       payment_method_types : ['card'],
    //       billing_address_collection : "auto",
    //       shipping_options : [{shipping_rate : "shr_1N0qDnSAq8kJSdzMvlVkJdua"}],

    //       line_items : req.body.map((item)=>{
    //         return{
    //           price_data : {
    //             currency : "inr",
    //             product_data : {
    //               name : item.name,
    //               // images : [item.image]
    //             },
    //             unit_amount : item.price * 100,
    //           },
    //           adjustable_quantity : {
    //             enabled : true,
    //             minimum : 1,
    //           },
    //           quantity : item.qty
    //         }
    //       }),

    //       success_url : `${process.env.FRONTEND_URL}/success`,
    //       cancel_url : `${process.env.FRONTEND_URL}/cancel`,

    //   }

    //   const session = await stripe.checkout.sessions.create(params)
    //   // console.log(session)
    //   res.status(200).json(session.id)
    //  }
    //  catch (err){
    //     res.status(err.statusCode || 500).json(err.message)
    //  }

        console.log('test');
        res.status(200).send({ data: 'Payment!' });
    } catch (err) {
        next(err);
    }
});

module.exports = router;


