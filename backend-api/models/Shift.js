const { array } = require("joi");
const { Schema, model } = require("mongoose");

const ShiftSchema = new Schema(
    {
        // user id
        job_id: {
            type:String,
            required: true,
        },
        job:{
            type: Schema.Types.ObjectId,
            ref: "jobs",
          },
        // client id
        duration_from: {
            type:String,
            required: true,
        },
        duration_to:{
            type:String,
            required: true,
        },
        price:{
            type: Number,
            required: true,
        },
    },
    { timestamps: true }
);

module.exports = model("shifts", ShiftSchema);