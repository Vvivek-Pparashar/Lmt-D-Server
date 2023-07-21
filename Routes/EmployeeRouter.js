const express = require("express");
const {
  getEmployees,
  getEmployee,
  postEmployee,
  deleteEmployee,
  putEmployee,
  addAttendance,
  getEmployeeByPan
} = require("../Controllers/EmployeeControllers");
const router = express.Router();

router.route("/").get(getEmployees).post(postEmployee);
router.route("/:username").get(getEmployee).delete(deleteEmployee);
router.route("/attendance/:username").get(addAttendance).post(addAttendance);
router.route("/:firstName/:lastName").get(getEmployeeByPan);
module.exports = router;
