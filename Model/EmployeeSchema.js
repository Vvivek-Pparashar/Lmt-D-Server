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
});

module.exports = mongoose.model("employee", employeeSchema);
