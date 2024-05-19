const { array } = require("joi");
const { Schema, model } = require("mongoose");

const WorkSchema = new Schema(
    {
        // user id
        job_id:{
            type: Schema.Types.ObjectId,
            ref: "jobs",
          },
        freelancer_id:{
            type: Schema.Types.ObjectId,
            ref: "freelancers",
          },
    },
    { timestamps: true }
);

module.exports = model("works", WorkSchema);