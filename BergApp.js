const express = require('express');
const app = express();
const port = 3000;
const myName = "Austin";

app.get('/api/message', (req, res) => {
    const jsonObject = {
        "Message": `My name is ${myName}`,
        "timestamp": new Date().toISOString()
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
    
    
    
