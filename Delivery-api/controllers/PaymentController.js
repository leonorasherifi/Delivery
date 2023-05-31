const express = require('express');
const Stripe = require('stripe');

const router = express.Router();
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

router.post("/create-checkout-session", async (req, res) => {
  try {
    const params = {
      submit_type: 'pay',
      mode: "payment",
      payment_method_types: ['card'],
      billing_address_collection: "auto",
      shipping_options: [{ shipping_rate: "shr_1NDD4eB0NPICjzKlSn8SmW7s" }],
      line_items: req.body.map((item) => {
        return {
          price_data: {
            currency: "inr",
            product_data: {
            name: item.name,
            //images: [item.image]
            },
            unit_amount: item.price * 100,
          },
          quantity: item.qty
        };
      }),
      success_url: `${process.env.REACT_APP_SERVER_DOMIN}/success`,
      cancel_url: `${process.env.REACT_APP_SERVER_DOMIN}/cancel`
    };

    const session = await stripe.checkout.sessions.create(params);
    res.status(200).json(session.id);
  } catch (err) {
    res.status(err.statusCode || 500).json(err.message);
  }
});

router.get('/', async (_req, res, next) => {
  try {
    console.log('test');
    res.status(200).send({ data: 'Payment!' });
  } catch (err) {
    next(err);
  }
});

module.exports = router;


