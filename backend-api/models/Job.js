const { array } = require("joi");
const { Schema, model } = require("mongoose");

const JobSchema = new Schema(
    {
        // user id
        user: {
            type: Schema.Types.ObjectId,
            ref: "users",
        },
        // client id
        client: {
            type: Schema.Types.ObjectId,
            ref: "clients",
        },
        project:{
            type: String,
            required: true,
        },
        skills:{
            type:[],
            required: true,
        },
        category:{
            type: String,
            required: true,
        },
        //description
        additionalBriefing:{
            type:   String ,
            required: true,
        },
        zipcode:{
            type:Number,
            required: true,
        },
        number:{
            type:Number,
            required: true,
        },
        contactPersonAtLocation:{
            type: String,
            required: true,
        },
        canBeReachedAt:{
            type: String,
            required: true,
        },
        // visual:{
        //     type: String,
        //     required: true,
        // }
        // client status enum pending approved rejected
        // status: {
        //     type: String,
        //     enum: ["Pending", "Approved", "Rejected"],
        //     default: "Pending",
        // },
    },
    { timestamps: true }
);

module.exports = model("jobs", JobSchema);