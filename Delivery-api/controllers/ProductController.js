const express = require('express');
const ProductDBModel = require("../models/ProductModel");



const router = express.Router();


router.get('/', async (_req, res, next) => {
    try {
        const data = await ProductDBModel.find({})
        console.log('data: ' + JSON.stringify(data))
         res.send(JSON.stringify(data))
    } catch (err) {
        next(err);
    }
});


router.post('/', async (_req, res, next) => {
    try {
        const data = await ProductDBModel(_req.body)
        const datasave = await data.save()
        res.send({message : "Upload successfully"})

    } catch (err) {
        next(err);
    }
});

module.exports = router;
