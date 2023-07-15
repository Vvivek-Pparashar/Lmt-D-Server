const express = require("express");
const {
  getEmployees,
  getEmployee,
  postEmployee,
  deleteEmployee,
  putEmployee,
  addAttendance,
  getAttendance,
} = require("../Controllers/EmployeeControllers");
const router = express.Router();

router.route("/").get(getEmployees).post(postEmployee);
router.route("/:id").get(getEmployee).delete(deleteEmployee).put(putEmployee);
router.route("/attendance/:username").get(addAttendance)
router.route("/attendance/check/:username").get(getAttendance)
module.exports = router;
