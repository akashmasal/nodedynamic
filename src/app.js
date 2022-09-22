const express = require("express");
const app = express();
const path = require("path");
const port = process.env.PORT || 1000;
const conn = require("../src/db/conn");
const hbs = require("hbs");
const viewspath = path.join(__dirname, "../templates/views");
const partialspath = path.join(__dirname, "../templates/partials");
const staticpath = path.join(__dirname, "../public");
const Contact = require("../src/models/contact");
app.use('/css', express.static(path.join(__dirname, "../node_modules/bootstrap/dist/css")));
app.use('/js', express.static(path.join(__dirname, "../node_modules/bootstrap/dist/js")));
app.use('/jquery', express.static(path.join(__dirname, "../node_modules/jquery/dist")));
app.use(express.static(staticpath));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.set("view engine", "hbs");
app.set("views", viewspath);
hbs.registerPartials(partialspath);



app.get("", (req, res) => {
    res.render("index");
});

app.get("/about", (req, res) => {
    res.render("about");
});

app.get("/service", (req, res) => {
    res.render("service");
});

app.get("/gallery", (req, res) => {
    res.render("gallery");
});


app.get("/contact", (req, res) => {
    // res.send("ok");
    res.render("contact");
});

app.post("/contact", async (req, res) => {
    try {
        const contactData = new Contact(req.body);
        // console.log(contactData);
        await contactData.save();
        res.status(200).render("index");
    }
    catch (error) {
        res.status(500).send(error);
    }
});










app.listen(port, () => {
    console.log(`server running on ${port}`);
});