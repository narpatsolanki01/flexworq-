const { Schema, model } = require("mongoose");

const KycSchema = new Schema(
  {
    // Freelancer
    avatar: {
      type: String,
      required: false,
    },
    user: {
      type: Schema.Types.ObjectId,
      ref: "users",
    },
    // Freelancer status enum pending approved rejected
    status: {
      type: String,
      enum: ["Pending", "Approved", "Rejected"],
      default: "Pending",
    },
  },
  { timestamps: true }
);

module.exports = model("kycs", KycSchema);