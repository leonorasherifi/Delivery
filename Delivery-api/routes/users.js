var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {

  let dataArray = [
    {name:"lisa1",age: 22},
    {name:"lisa2",age: 30},
    {name:"lisa3",age: 10}
  ]

  res.json({
    data: dataArray
  })

});

module.exports = router;
