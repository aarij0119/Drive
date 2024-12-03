const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    username:{
        type:String,
        require: true,
        trim: true,
        unique: true,
        lowercase: true,
        minlength: [4 ,"username must be 4 character"]
    },
    email:{
        type: String,
        require: true,
        trim: true,
        unique: true,
        lowercase: true,
        minlength: [10, "email must be at least 10 character"]

    },
    password:{
        type: String,
        require: true,
        trim: true,
        minlength: [6, "password must be at least 6 character"]
    }
})

module.exports = mongoose.model("user", userSchema)