import mongoose from "mongoose"
import bcrypt from "bcrypt"

const sessionSchema = new mongoose.Schema({
    user: {
        type : mongoose.Schema.Types.ObjectId,
        required : [true, "User is required."],
        ref : "users"
    },
    refreshToken: {
        type : String,
        required : [true, "Refresh-token-hash is required."],
    },
    ip: {
        type : String,
        required : [true, "IP address is required."],
    },
    userAgent: {
        type : String,
        required : [true, "User-agent is required."],
    },
    revoked : {
        type : Boolean,
        default : false,
        required : [true, "Revoked-status is required."]
    }
},{
    timestamps : true
});

export const sessionModel = mongoose.model("sessions", sessionSchema);