const registerUser=(req,res)=>{
    const{username,email,password}=req.body;
    if(!email || !password || !username){
        req.status(400);
        throw new Error("All fields are mandatory");
    }
    res.json({message:"register user"});
}
const loginUser=(req,res)=>{
    res.json({message:"register user"});
}
const currentUser=(req,res)=>{
    res.json({message:"register user"});
}

module.exports= {registerUser,currentUser,loginUser}