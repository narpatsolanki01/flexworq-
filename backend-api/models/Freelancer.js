const { Schema, model } = require("mongoose");

const FreelancerSchema = new Schema(
  {
    // Freelancer
    avatar: {
      type: String,
      required: false,
    },
    dob: {
      type: Date,
      required: true,
    },
    phoneNumber: {
      type: String,
      required: true,
    },
    // user id
    user: {
      type: Schema.Types.ObjectId,
      ref: "users",
    },
    id_front:{
      type: String,
      required: false,
    },
    id_back:{
      type: String,
      required: false,
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

module.exports = model("freelancers", FreelancerSchema);