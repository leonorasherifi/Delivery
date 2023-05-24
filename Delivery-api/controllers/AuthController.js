const express = require('express');

const router = express.Router();

router.post('/signup', async (_req, res, next) => {
    try {
        const data = _req.body;
        console.log('test', data);
        res.status(200).send({ data: 'Pong!' });
    } catch (err) {
        next(err);
    }
});

module.exports = router;