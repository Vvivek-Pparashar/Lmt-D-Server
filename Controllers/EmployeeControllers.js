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
  const { username } = req.params;
  const employee = await Employee.findOne({ username:username });

  if (!employee) {
    return res.status(404).json({ msg: "No employee for this username" });
  }
  res.status(200).json( employee );
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
  
    res.status(404);
    throw new Error("employee not found");
  }



  await Employee.findOneAndDelete({ _id: req.params.id });
  res.status(200).json({ id: req.params.id });
});



//@desc     Employee attendance add
//@route    PUT /api/Employees/attendance/:id
// const addAttendance = asyncHandler(async (req, res) => {
//   const { username } = req.params;
//   const currentDate = new Date().toISOString().split("T")[0];

//   const employee = await Employee.findOne({ username:username });

//   if (!employee) {
//     res.status(404);
//     throw new Error("Employee not found");
//   }


//   const isAttendanceMarked = employee.attendance.some((entry) => {
//     const entryDate = new Date(entry.date);
//     const entryYear = entryDate.getFullYear();
//     const entryMonth = entryDate.getMonth();
//     const entryDay = entryDate.getDate();

//     const currentYear = new Date(currentDate).getFullYear();
//     const currentMonth = new Date(currentDate).getMonth();
//     const currentDay = new Date(currentDate).getDate();


//     return (
//       entryYear === currentYear &&
//       entryMonth === currentMonth &&
//       entryDay === currentDay
//     );
//   });

//   if (isAttendanceMarked) {
//     res.status(200).json({ message: "Attendance already marked for today" });
//     return;
//   }



//   employee.attendance.push({ date: currentDate });
//   const updatedEmployee = await employee.save();

//   res.status(200).json(updatedEmployee);
// });

const addAttendance = asyncHandler(async (req, res) => {
  const { username } = req.params;
  const currentDate = new Date().toISOString().split("T")[0];
  console.log(currentDate)
  const employee = await Employee.findOne({ username });

  if (!employee) {
    res.status(404);
    throw new Error("Employee not found");
  }

  const isAttendanceMarked = employee.attendance.some((entry) => {
    const entryDate = new Date(entry.date);
 
    const entryYear = entryDate.getFullYear();
    const entryMonth = entryDate.getMonth();
    const entryDay = entryDate.getDate();

    const currentYear = new Date(currentDate).getFullYear();
    const currentMonth = new Date(currentDate).getMonth();
    const currentDay = new Date(currentDate).getDate();
    
    return (
      entryYear === currentYear &&
      entryMonth === currentMonth &&
      entryDay === currentDay
    );
  });

  if (req.method === "GET") {
    if (isAttendanceMarked) {
      res.status(200).json({ message: "Attendance already marked for today" });
    } else {
      res.status(200).json(employee.attendance);
    }
  } else if (req.method === "POST") {
    if (isAttendanceMarked) {
      res.status(200).json({ message: "Attendance already marked for today" });
    } else {
      employee.attendance.push({ date: currentDate });
      const updatedEmployee = await employee.save();
      res.status(200).json(updatedEmployee);
    }
  } else {
    res.status(400);
    throw new Error("Invalid request method");
  }
});


const getEmployeeByPan = asyncHandler(async (req, res) => {
  const { firstName, lastName } = req.params;

  // Find the employee using the firstName and lastName in the database
  const employee = await Employee.findOne({
    aadharNo: firstName,
    panNo: lastName,
  });

  if (!employee) {
    return res.status(404).json({ msg: "No employee found with the given first name and last name" });
  }

  res.status(200).json(employee);
});


module.exports = {
  getEmployees,
  getEmployee,
  postEmployee,
  putEmployee,
  deleteEmployee,
  addAttendance,
  getEmployeeByPan,

};
