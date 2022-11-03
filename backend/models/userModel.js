const mongoose = require("mongoose")
const bcrypt = require("bcryptjs")

const userSchema = mongoose.Schema({
    name: {
        type: String, 
        required: [true, "you must add a name"]
    },
    email: {
        type: String,
        required: [true, "you must add an email"],
        unique: true,
        trim: true,
        match:[
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            "Please enter a valid email"   
        ]
    },
    password: {
        type: String,
        required: [true, "You must add a password"],
        minLength: [6, "Password atleast 6 characters"],
        //maxLength: [15, "Password must not be more than 15 characters"]
    },
    userType:{
        type: String,
        required: [true, "Please Choose a Usertype"],
    },

}, {
    timestamps:true,
})

const User = mongoose.model("User", userSchema)
module.exports = User