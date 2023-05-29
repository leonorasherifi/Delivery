
const PingController = require("../controllers/PingController");
const ProductController = require("../controllers/ProductController");
const AuthController = require("../controllers/AuthController");
const PaymentController = require("../controllers/PaymentController");

const routes = (app) => {
  app.use("/ping", PingController);
  app.use("/products", ProductController);
  app.use("/auth", AuthController);
  app.use("/create-checkout-session", PaymentController);
};

module.exports = routes;
