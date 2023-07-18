const { default: mongoose } = require("mongoose");

const employeeSchema = mongoose.Schema({
  username: {
    type: String,
    // required : [true, "give a username"]
  },

  password: {
    type: String,
    // required : [true, "give a password"]
  },

  admin: {
    type: Boolean,
    // required : [true, "give admin rights"]
  },
  // attendance: {
  //   type: [
  //     {
  //       date: {
  //         type: Date,
  //         _id: false,
  //       },
  //     },
  //   ],
  //   required: false,
  // },

  employeeId: { type: Number },
  applicationFor: { type: String },
  joiningBranch: { type: String },
  underGroup: { type: String },
  dateOfJoining: { type: String },
  salary: { type: Number },
  experience: { type: Number },
  name: { type: String },
  fatherName: { type: String },
  address: { type: String },
  state: { type: String },
  pincode: { type: Number },
  dob: { type: String },
  aadharNo: { type: Number },
  phoneNo: { type: Number },
  email: { type: String },
  panNo: { type: String },
  maritalStatus: { type: String },
  gender: { type: String },
  eduQualification: { type: String },
  computer: { type: String },
  bankAccountNo: { type: Number },
  bankName: { type: String },
  bankIFSCCode: { type: String },
  bankBranch: { type: String },
  page: { type: Number },
});

module.exports = mongoose.model("employee", employeeSchema);
