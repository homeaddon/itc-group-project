const express = require("express");
const fs = require("fs");
const path = require("path");

const app = express();

app.use(express.json());
app.use(express.static("public")); 

app.post("/save", (req, res) => {
    const newData = req.body;
    let data = [];

    if (fs.existsSync("data.json")) {
        data = JSON.parse(fs.readFileSync("data.json"));
    }

    data.push(newData);

    fs.writeFileSync("data.json", JSON.stringify(data, null, 2));
    res.json({ message: "Data saved successfully" });
});

app.get("/account/:accountNo", (req, res) => {
    const { accountNo } = req.params;

    if (!fs.existsSync("data.json")) {
        return res.status(404).json({ message: "No data found" });
    }

    const data = JSON.parse(fs.readFileSync("data.json"));

    const account = data.find(
        item => item.accountNo === accountNo
    );

    if (!account) {
        return res.status(404).json({ message: "Account not found" });
    }

    res.json(account);
});


app.listen(3000, () => {
    console.log("Server running at http://localhost:3000");
});
