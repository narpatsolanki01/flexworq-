const { Schema, model } = require("mongoose");
const { ROLE } = require("../config/roles");

const UserSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      default: "user",
      enum: [ROLE.admin, ROLE.client, ROLE.freelancer],
    },
    password: {
      type: String,
      required: false,
    },
  },
  { timestamps: true }
);

module.exports = model("users", UserSchema);
