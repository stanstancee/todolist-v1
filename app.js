const express = require("express");
const bodyParser = require("body-parser");
const date = require('./date.js');
const PORT = 3000;
const app = express();
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));


app.get("/", function (req, res) {
   const day = date.getDate();
   res.render("list",{listTitle:day}) ;
  
 });
  

app.listen(PORT, function () {
    console.log(`Server running on port ${PORT}`)
});