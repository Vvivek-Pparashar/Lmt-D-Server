const express = require("express");
const {
  getProducts,
  getProduct,
  postProduct,
  deleteProduct,
  putProduct,
} = require("../Controllers/Controllers");
const router = express.Router();

router.route("/").get(getProducts).post(postProduct);
router.route("/:id").get(getProduct).delete(deleteProduct).put(putProduct);

module.exports = router;
