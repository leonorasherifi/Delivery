const express = require('express');
const UserDBModel = require("../models/UserModel");

const router = express.Router();

router.get('/', async (_req, res, next) => {
    try {
        console.log('test');
        res.status(200).send({ data: 'OK!' });
    } catch (err) {
        next(err);
    }
});


router.post('/', async (_req, res, next) => {
    try {
        const data = _req.body;
        console.log('test111', data);
        const insert = await UserDBModel.create(data);
        res.status(200).send({ data: 'OK!' });
    } catch (err) {
        next(err);
    }
});

module.exports = router;