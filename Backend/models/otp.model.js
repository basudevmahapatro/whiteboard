import mongoose from "mongoose"
import bcrypt from "bcrypt"
import { config } from "../src/config/config.js";

const otpSchema = new mongoose.Schema({
    email: {
        type : String,
        required : [true, "Email is required."],
    },
    user: {
        type : mongoose.Schema.Types.ObjectId,
        ref : "users",
        required : [true, "User is required."],
    },
    otp: {
        type : String,
        required : [true, "Username is required."]
    },
    createdAt: { 
        type: Date, 
        default: Date.now, 
        expires: 300 
    }
},{
    timestamps : true
});

otpSchema.pre("save", async function () {
    if (!this.isModified('otp')) return;

    try {
        const salt = await bcrypt.genSalt(10);
        this.otp = await bcrypt.hash(this.otp, salt);
        
    } catch (error) {
        console.error("Hashing Error:", error);
        throw error; 
    }
});

export const otpModel = mongoose.model("otps", otpSchema);

