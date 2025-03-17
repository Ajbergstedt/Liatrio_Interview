const express = require('express');
const app = express();
const port = 80;

app.get('/', (req, res) => {
    const jsonObject = {
        "message": "My name is Austin",
        "timestamp": Math.floor(Date.now() / 1000)  // Seconds instead of milliseconds
    };
    res.send(JSON.stringify(jsonObject));
});

const server = app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});

process.on('SIGTERM', () => {
    console.log('SIGTERM received, shutting down');
    server.close(() => {
        console.log('Server closed');
        process.exit(0);
    });
});

process.on('SIGINT', () => {
    console.log('SIGINT received, shutting down');
    server.close(() => {
        console.log('Server closed');
        process.exit(0);
    });
});