import mongoose from "mongoose";


const User = new mongoose.Schema({
    userName : {
        type : String,
        require : true
    },
    userEmail : {
        type : String,
        require : true
    },
    userNumber : {
        type : Number,
        require : true
    },
    userPassword : {
        type : String,
        require : true
    }

})

export default  mongoose.model("User" , User)