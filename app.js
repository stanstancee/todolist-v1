const express = require("express");
const bodyParser = require("body-parser");
const PORT = 3000;
const app = express();
app.set("view engine", "ejs");
let date = new Date();
let weekDay = date.getDay();
let day = "";

app.get("/", function (req, res) {

    switch (weekDay) {
        case 0:
            day = "Sunday";

            break;
        case 1:
            day = "Monday";
            break;
        case 2:
            day = "Tuesday";

            break;
        case 3:
            day = "Wednesday";

            break;
        case 4:
            day = "Thursday";

            break;
        case 5:
            day = "Friday";
            break;
        case 6:
            day = "Saturday";
            break;


        default:
            console.log("Error please fix your code. Current day counts from 0-6. Current day is " + weekDay);
            break;

    }
    res.render("list", {
        thisday: day
    });
});

app.listen(PORT, function () {
    console.log(`Server running on port ${PORT}`)
});