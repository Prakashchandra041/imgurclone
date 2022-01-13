const mongoose = require("mongoose");
const bcryptjs = require("bcryptjs");
const adminSchema = new mongoose.Schema({
  email: { type: String, require: true,unique:true },
  password: { type: String,require:true}
});

adminSchema.pre('save', function (next) {

  if (!this.isModified("password")) return next();
  var hash = bcryptjs.hashSync(this.password, 8);
  this.password = hash;
  next();

})
//here we unhash the bcrpt password sothat we access it in our login function

adminSchema.methods.checkPassword =function (password) {
  const match = bcryptjs.compareSync(password, this.password);
  return match;
};


const Admin = mongoose.model("admin", adminSchema);
module.exports = Admin;
