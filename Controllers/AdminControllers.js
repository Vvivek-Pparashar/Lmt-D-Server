const asyncHandler = require("express-async-handler");
const Admin = require("../Model/AdminSchema");

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
  const { id: taskId } = req.params;
  const admin = await Admin.findOne({ _id: taskId });

  if (!admin) {
    return res.status(404).json({ msg: "No Admin for this id" });
  }
  res.status(200).json({ admin });
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

//@desc     delete a Admin
//@route    PUT /api/Admins/:id
//@access   private
const deleteAdmin = asyncHandler(async (req, res) => {
  const admin = await Admin.findById(req.params.id);

  if (!admin) {
    console.log("vivek");
    res.status(404);
    throw new Error("Admin not found");
  }

  console.log(admin)

  await Admin.findOneAndDelete({ _id: req.params.id });
  res.status(200).json({ id: req.params.id });
});

module.exports = {
  getAdmins,
  getAdmin,
  postAdmin,
  putAdmin,
  deleteAdmin,
};
