const express = require('express');
const app = express();
const port = 3000;
const myName = "Austin"

app.get('/api/message', (req, res) => {
    const myName = req.query.name || "Austin"; // query or default to Austin
    const JsonObject = {
        "Message": `My name is ${myName}`,
        "timestamp": new Date().toISOString()
    };
    res.json(JsonObject);
    });

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
