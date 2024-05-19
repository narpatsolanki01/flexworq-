const { Schema, model } = require("mongoose");

const ClientSchema = new Schema(
  {
    // client
    companyName: {
      type: String,
      required: false,
    },
    phoneNumber: {
      type: String,
      required: false,
    },
    // user id
    user: {
      type: Schema.Types.ObjectId,
      ref: "users",
    },
    // client status enum pending approved rejected
    status: {
      type: String,
      enum: ["Pending", "Approved", "Rejected"],
      default: "Pending",
    },
  },
  { timestamps: true }
);

module.exports = model("clients", ClientSchema);