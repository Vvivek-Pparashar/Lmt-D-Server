const express = require("express");
const {
  getEmployees,
  getEmployee,
  postEmployee,
  deleteEmployee,
  putEmployee,
} = require("../Controllers/EmployeeControllers");
const router = express.Router();

router.route("/").get(getEmployees).post(postEmployee);
router.route("/:id").get(getEmployee).delete(deleteEmployee).put(putEmployee);

module.exports = router;
