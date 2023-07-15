const express = require("express");
const {
  getEmployees,
  getEmployee,
  postEmployee,
  deleteEmployee,
  putEmployee,
  addAttendance,
} = require("../Controllers/EmployeeControllers");
const router = express.Router();

router.route("/").get(getEmployees);
router.route("/:username").get(getEmployee);
router.route("/attendance/:username").get(addAttendance)
module.exports = router;
