// var express = require('express');
// var router = express.Router();

// /* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

// module.exports = router;

// const { PingController } = require("../controllers/PingController");
// const endpoints = [["/api/ping", PingController]];

// export const routes = (app) => {
//   [...swaggerEndpoints, ...endpoints].forEach((route) => {
//     const [url, controller] = route;
//     app.use(url, controller);
//   });
// };

const PingController = require("../controllers/PingController");
const ProductController = require("../controllers/ProductController");
const AuthController = require("../controllers/AuthController");

const routes = (app) => {
  app.use("/ping", PingController);
  app.use("/product", ProductController);
  app.use("/auth", AuthController);
};

module.exports = routes;
