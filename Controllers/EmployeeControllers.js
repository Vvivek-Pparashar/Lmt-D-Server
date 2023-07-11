const asyncHandler = require("express-async-handler");
const Employee = require("../Model/EmployeeSchema");

//@desc     get all Employees
//@route    GET /api/Employees
//@access   public
const getEmployees = asyncHandler(async (req, res) => {
  const Employees = await Employee.find();
  res.status(200).json(Employees);
});

//@desc     get Employee by id
//@route    GET /api/Employees/:id
//@access   public

const getEmployee = asyncHandler(async (req, res) => {
  const { id: taskId } = req.params;
  const employee = await Employee.findOne({ _id: taskId });

  if (!employee) {
    return res.status(404).json({ msg: "No employee for this id" });
  }
  res.status(200).json({ employee });
});

//@desc     post a employee
//@route    POST /api/employees
//@access   private
const postEmployee = asyncHandler(async (req, res) => {
  const employee = await Employee.create(req.body);

  res.status(201).json(employee);
});

//@desc     update a employee
//@route    PUT /api/employees/:id
//@access   private

const putEmployee = asyncHandler(async (req, res) => {
  const employee = await Employee.findById(req.params.id);

  if (!employee) {
    res.status(400);
    throw new Error("employee not found");
  }

  const updatedEmployee = await Employee.findByIdAndUpdate(
    req.params.id,
    req.body,
    {
      new: true,
    }
  );
  res.status(200).json(updatedEmployee);
});

//@desc     delete a Employee
//@route    PUT /api/Employees/:id
//@access   private
const deleteEmployee = asyncHandler(async (req, res) => {
  const employee = await Employee.findById(req.params.id);

  if (!employee) {
    console.log("vivek");
    res.status(404);
    throw new Error("employee not found");
  }

  console.log(employee);

  await Employee.findOneAndDelete({ _id: req.params.id });
  res.status(200).json({ id: req.params.id });
});

module.exports = {
  getEmployees,
  getEmployee,
  postEmployee,
  putEmployee,
  deleteEmployee,
};
