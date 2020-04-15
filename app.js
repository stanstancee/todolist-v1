const express = require("express");
const bodyParser = require("body-parser");
const PORT = 3000;
const app = express();
app.set("view engine", "ejs");
let date = new Date();
let weekDay = date.getDay();
let day = "";

app.get("/",function(req,res){
    if(weekDay == 6 || weekDay == 0){
        day = "weekend";
    }
    else{
        day = "weekday"; 
    }
    res.render("list",{thisday:day});
});

app.listen(PORT, function(){
    console.log(`Server running on port ${PORT}`)
});