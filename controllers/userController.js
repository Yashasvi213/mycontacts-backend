
const jwt= require("jsonwebtoken");
const asyncHandler=require("express-async-handler");
const User= require("../models/userModel");
const bcrypt= require("bcrypt");

const registerUser=asyncHandler(async(req,res)=>{
    const{username,email,password}=req.body;
    if(!email || !password || !username){
        res.status(400);
        throw new Error("All fields are mandatory");
    }
    //checking if user is already registerd
    const userAvailable= await User.findOne({email});
    if(userAvailable){
        res.status(400);
        throw new Error("user is already registered");
    }
    //creating new user that is storing its username, email and password in db
    //storing pw as hashed pw
    const hashedPassword= await bcrypt.hash(password, 10);
    console.log("hashed pw is",hashedPassword);

    //create
    const user= await User.create({
            username,
            email,
            password:hashedPassword,
        });
    console.log(`user created successfully ${user}`);


})
const loginUser=asyncHandler(async(req,res)=>{

    const{email,password}=req.body;
    if(!email || !password){
        res.status(400);
        throw new Error("all fiels are mandatory");
    }
    //finding there is user of given email
    const user= await User.findOne({email});
    //matching pw
    if(user && (await bcrypt.compare(password, user.password))){
        //generating  token
        const accessToken= jwt.sign({
            user:{
                username:user.username,
                email:user.email,
                id:user.id,
            },
        },
        process.env.ACCESS_TOKEN_SECRET,
        
        {expiresIn :"15m"}
    );
    res.status(200).json({ accessToken });
    }

    else{
        throw new Error("email or pw not valid");
    }
    
});




const currentUser=(req,res)=>{
    res.json(req.user);
}

module.exports= {registerUser,currentUser,loginUser}