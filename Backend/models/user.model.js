import mongoose from "mongoose"
import { config } from "../src/config/config.js";
import bcrypt from "bcrypt"

const userSchema = new mongoose.Schema({
    email: {
        type : String,
        required : [true, "Email is required."],
        unique : [true, "Email must be unique."]
    },
    password: {
        type : String,
        required : [true, "Password is required."],
    },
    username: {
        type : String,
        required : [true, "Username is required."],
        unique : [true, "Username must be unique."]
    },
    verified: {
        type : Boolean,
        default : false
    }
});

userSchema.pre("save", async function () {
    if (!this.isModified('password')) return;

    try {
        const salt = await bcrypt.genSalt(10);
        this.password = await bcrypt.hash(this.password, salt);
        
    } catch (error) {
        console.error("Hashing Error:", error);
        throw error; 
    }
});

export const userModel = mongoose.model("users", userSchema);