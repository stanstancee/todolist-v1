const express = require("express");
const bodyParser = require("body-parser");
const PORT = 3000;
const app = express();
app.use("view engine", "ejs");
let date = new Date();
let weekDay = date.getDay();
let day = "";

app.get("/",function(req,res){
    if(weekDay == 6 || weekDay == 0){
        day = "weekend";
        res.render("list",{day:day})
    }
    else{
        day = "weekday";
        res.render("list",{day:day})
    }
});

app.listen(PORT, function(){
    console.log(`Server running on port ${PORT}`)
});