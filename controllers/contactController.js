const contacts= require("../models/contactModel");

const asyncHandler=require("express-async-handler")
const getContact=(async(req,res)=>{
    const{email,phone,name}=req.body;
    const contact=await contacts.find({
        name,
        email,
        phone
    });
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
    res.json({message:`Update contact for ${req.params.id}`});
})

const deleteContact=asyncHandler(async(req,res)=>{
    res.json({message:`Delete contact for id ${req.params.id}`});
})

const getOneContact=asyncHandler(async(req,res)=>{
    res.json({message:`Get contact for id ${req.params.id}`});
})

module.exports={getContact, createContact,getOneContact, deleteContact, updateContact};