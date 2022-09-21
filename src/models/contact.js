const mongoose = require("mongoose");

require("../db/conn");

const contactSchema = new mongoose.Schema({
    name : String,
    email : String,
    phone : Number,
    message : String
});

const Contact = new mongoose.model("Contact",contactSchema);

 