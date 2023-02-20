const mg = require("mongoose");

const userSchema = {
  firstName: { type: String, required: true },
  lastName: { type: String },
  userName: { type: String, required: true },
  email: { type: String, required: true },
  pwd: { type: String, required: true },
};

const User = mg.model("user", userSchema);

module.exports = { User };
