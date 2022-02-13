const express = require("express");
const path = require("path");
const port = process.env.PORT || 5000
const app = express();

app.use(express.static(path.join(__dirname,"resources/webapp")));

app.get("/", function(){
    console.log("server`s up");
});

app.listen(port);