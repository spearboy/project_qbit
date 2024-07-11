const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const UserSchema = new Schema({
  youName: {
    type: String,
    require: true,
  },
  youID: {
    type: String,
    require: true,
    unique: true,
  },
  youPass: {
    type: String,
    require: true,
  },
});

const UserModel = model("User", UserSchema);
module.exports = UserModel;
