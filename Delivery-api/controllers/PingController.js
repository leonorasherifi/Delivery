const express = require('express');

const router = express.Router();

router.get('/', async (_req, res, next) => {
    try {
        console.log('test');
        res.status(200).send({ data: 'Pong!' });
    } catch (err) {
        next(err);
    }
});

module.exports = router;


