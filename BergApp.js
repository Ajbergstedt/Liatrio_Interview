const express = require('express');
const app = express();
const port = 80;

app.get('/', (req, res) => {
     const jsonObj = {
        message: "My name is Austin",
        timestamp: Date.now(),
        stringify: function () {
            return JSON.stringify({
                message: this.message,
                timestamp: this.timestamp
            });
        }
    }; 
    /*const jsonObj = {
        message: "My name is Austin",
        timestamp: Date.now()
    }; // Passes tests 1-6*/
    res.json(jsonObj);
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