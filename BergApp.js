const express = require('express');
const app = express();
const port = 80;
const myName = "Austin";

app.get('/', (req, res) => {
    const jsonObject = {
        "message": `My name is ${myName}`,
        "timestamp": Date.now()
    };
    res.json(jsonObject);
    });

    const server = app.listen(port, () => {
        console.log(`Server running at http://localhost:${port}`);
    });
    
    // Handle SIGTERM (Docker stop)
    process.on('SIGTERM', () => {
        console.log('SIGTERM received, shutting down');
        server.close(() => {
            console.log('Yall come back now, ya hear?');
            process.exit(0);
        });
    });
    
    // Handle SIGINT (Ctrl+C)
    process.on('SIGINT', () => {
        console.log('SIGINT received, shutting down');
        server.close(() => {
            console.log('Yall come back now, ya hear?');
            process.exit(0);
        });
    });
    
    
    
