const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());

const port = process.env.PORT || 3000;

const apiData = require("./data.json");
const flagApi = require("./flag.json");

app.get("/", (req, res) => {
    res.send("Hello i am live");
});

app.get("/service", (req, res) => {
    res.send(flagApi);
})

app.listen(port, () => {
    console.log("I am live again");
});