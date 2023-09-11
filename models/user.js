const mongoose = require("mongoose");


// schema
const userSchema = new mongoose.Schema({
    firstName:{
        type : String,
        required : true,
    },
    lastName:{
        type : String,
        required : true,
    },
    email:{
        type : String,
        required : true,
        unique : true,
    },
    jobTitle:{
        type : String,
    },
    gender:{
        type : String,
    },
}, {timestamps : true});


// making a db model
// user - name of the db  &  User - object name
const User = mongoose.model("users", userSchema); 

module.exports = User;