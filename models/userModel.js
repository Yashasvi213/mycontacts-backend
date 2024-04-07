const mongoose= require("mongoose");

const userSchema=({
    username:{
        type:String,
        required:[true,"compulsory field"],   
    },
    email:{
        type:String,
        required:[true,"mandatory field"],
        unique:[true,"email already exists"]
    },
    password:{
        type:String,
        required:[true,"mandatory"]
    }
},{
    timestamps:true
})

module.export= mongoose.model("User",userSchema);
