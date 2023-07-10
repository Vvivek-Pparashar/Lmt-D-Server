const { default: mongoose } = require("mongoose");

const productSchema = mongoose.Schema({
  username : {
    type : String,
    required : [true, "give a username"]
  },

  password : {
    type : String,
    required : [true, "give a password"]
  },
  
  admin : {
    type : Boolean,
    required : [true, "give admin rights"]
  }
});

module.exports = mongoose.model("User", productSchema);
