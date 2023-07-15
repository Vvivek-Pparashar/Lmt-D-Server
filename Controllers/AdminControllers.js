const asyncHandler = require("express-async-handler");
const Admin = require("../Model/AdminSchema");
const Employee = require("../Model/EmployeeSchema");
//@desc     get all Admins
//@route    GET /api/Admins
//@access   public
const getAdmins = asyncHandler(async (req, res) => {
  const Admins = await Admin.find();
  res.status(200).json(Admins);
});

//@desc     get Admin by id
//@route    GET /api/Admins/:id
//@access   public

const getAdmin = asyncHandler(async (req, res) => {
  const { username } = req.params;
  const admin = await Admin.findOne({ username:username });

  if (!admin) {
    return res.status(404).json({ msg: "No Admin for this username" });
  }
  res.status(200).json( admin );
});

//@desc     post a Admin
//@route    POST /api/Admins
//@access   private
const postAdmin = asyncHandler(async (req, res) => {

  const admin = await Admin.create(req.body);

  res.status(201).json(admin);
});

//@desc     update a Admin
//@route    PUT /api/Admins/:id
//@access   private

const putAdmin = asyncHandler(async (req, res) => {
  const admin = await Admin.findById(req.params.id);

  if (!admin) {
    res.status(400);
    throw new Error("Admin not found");
  }

  const updatedAdmin = await Admin.findByIdAndUpdate(
    req.params.id,
    req.body,
    {
      new: true,
    }
  );
  res.status(200).json(updatedAdmin);
});



//---------------------------------------------- Add and Delete User by admin-------------------------------------------------------
const addUser = async (req, res) => {
  try {
    const { username } = req.params;
    const password = "345432"; // Generate a random 6-digit password later
    const admin = false;

    // Check if the username already exists
    const existingUser = await Employee.findOne({ username:username });
    if (existingUser) {
      res.status(400).json({ error: 'Username already exists' });
      return;
    }

    const employee = new Employee({
      username,
      password,
      admin,
    });

    const newUser = await employee.save();
    res.status(201).json(newUser);
  } catch (error) {
    res.status(500).json({ error: 'Failed to add user' });
  }
};


const deleteUser = async (req, res) => {
  try {
    const { username } = req.params;

    const deletedUser = await Employee.findOneAndDelete({ username });

    if (!deletedUser) {
      res.status(404).json({ error: 'User not found' });
      return;
    }

    res.status(200).json({ message: 'User deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete user' });
  }
};

//--------------------------------------------------------------------------------------------------------------


//-----------------------------------------------------------Add and delete admin by admin-----------------------------------------
const addAdmin = async (req, res) => {
  try {
    const { username } = req.params;
    const password = "345432"; // Generate a random 6-digit password later
    const admin = true;

    // Check if the username already exists
    const existingAdmin = await Admin.findOne({ username:username });
    if (existingAdmin) {
      res.status(400).json({ error: 'Username already exists' });
      return;
    }

    const newAdmin = new Admin({
      username,
      password,
      admin,
    });

    const newUser = await newAdmin.save();
    res.status(201).json(newUser);
  } catch (error) {
    res.status(500).json({ error: 'Failed to add user' });
  }
};


const deleteAdmin = async (req, res) => {
  try {
    const { username } = req.params;

    const deletedUser = await Admin.findOneAndDelete({ username:username,admin:true });

    if (!deletedUser) {
      res.status(404).json({ error: 'User not found' });
      return;
    }

    res.status(200).json({ message: 'User deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete user' });
  }
};
module.exports = {
  getAdmins,
  getAdmin,
  postAdmin,
  putAdmin,
  deleteAdmin,
  addUser,
  deleteUser,
  addAdmin,
};
