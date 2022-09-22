const mongoose = require("mongoose");

require("../db/conn");

const contactSchema = new mongoose.Schema({
    name : String,
    email : String,
    phone : Number,
    message : String,
    date : {
        type : Date,
        default:Date.now
    }
});

const Contact = new mongoose.model("Contact",contactSchema);

module.exports = Contact;



 