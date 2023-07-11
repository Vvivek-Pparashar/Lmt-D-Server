const express = require("express");
const {
  getAdmins,
  getAdmin,
  postAdmin,
  deleteAdmin,
  putAdmin,
} = require("../Controllers/AdminControllers");
const router = express.Router();

router.route("/").get(getAdmins).post(postAdmin);
router.route("/:id").get(getAdmin).delete(deleteAdmin).put(putAdmin);

module.exports = router;
