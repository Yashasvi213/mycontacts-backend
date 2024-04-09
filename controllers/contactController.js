const contacts= require("../models/contactModel");

const asyncHandler=require("express-async-handler")

const getContact=(async(req,res)=>{
    
    const contact=await contacts.find();
    res.json({contact});
})

const createContact=asyncHandler(async(req,res)=>{
    console.log("The body is:",req.body);
    const{email,phone,name}=req.body;
    if(!email || !phone || !name){
        req.status(400);
        throw new Error("All fields are mandatory");
    }
    const contact=await contacts.create({
        name,
        email,
        phone
    });
    res.json({contact});
})

const updateContact=asyncHandler(async(req,res)=>{
    const contact= await Contact.findById(req.params.id);
    if(!contact){
        res.status(err);
        throw new Error("Not found ");
    }

    const updateContact=await Contact.findByIdAndUpdate(
        req.params.id,
        req.body,
        {new:true}
    );
    res.json({updateContact});
})

const deleteContact=asyncHandler(async(req,res)=>{
    const contact= await Contact.findById(req.params.id);
    await contact.remove();
    res.json({contact});
})

const getOneContact=asyncHandler(async(req,res)=>{
    const contact= await Contact.findById(req.params.id);
    if(!contact){
        res.status(err);
        throw new Error("Not found ");
    }
    res.json({contact});
})

module.exports={getContact, createContact,getOneContact, deleteContact, updateContact};