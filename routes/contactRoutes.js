const express= require("express");
const router= express.Router();
const {getContact,createContact,getOneContact, updateContact, deleteContact}=require("../controllers/contactController");

//CRUD ACTIONS

router.route("/").post(createContact);
router.get("/",getContact);
router.route("/:id").get(getOneContact).put(updateContact).delete(deleteContact);




module.exports =router;