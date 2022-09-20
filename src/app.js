const express = require("express");
const app = express();
const port = process.env.port || 1000;
const conn = require("../src/db/conn");
app.get("", (req, res) => {
    res.send("ok");
});

app.listen(port, () => {
    console.log(`server running at port ${port}`);
});