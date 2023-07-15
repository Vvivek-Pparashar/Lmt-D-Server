const express = require("express");
const {
  getAdmins,
  getAdmin,
  postAdmin,
  deleteAdmin,
  putAdmin,
  addUser,
  deleteUser,
  addAdmin,
} = require("../Controllers/AdminControllers");
const router = express.Router();

router.route("/").get(getAdmins);
router.route("/:username").get(getAdmin);
router.route("/add/user/:username").get(addUser)
router.route("/delete/user/:username").get(deleteUser)
router.route("/add/admin/:username").get(addAdmin)
router.route("/delete/admin/:username").get(deleteAdmin)
module.exports = router;
