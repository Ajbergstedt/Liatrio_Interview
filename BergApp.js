const express = require('express');
const app = express();
const port = 80;


// SECTION: ROUTE DEFINITION
// This section defines a single route for the root URL ('/'). When a GET request is made to
// the root, it responds with a JSON object containing a message, timestamp, and version.

app.get('/', (req, res) => {
    const jsonObj = {
        message: "My name is Austin",
        timestamp: Date.now(),
        version: "1.3"
    };
    res.json(jsonObj);
});


// SECTION: SERVER STARTUP
// This section starts the Express server, making it listen for incoming HTTP requests on the
// specified port. It logs a message to confirm the server is running.

const server = app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});


// SECTION: GRACEFUL SHUTDOWN (SIGTERM)
// This section handles the SIGTERM signal, typically sent by a process manager (e.g., Docker)
// to request the app to shut down cleanly. It closes the server and exits the process.

process.on('SIGTERM', () => {       
    console.log('SIGTERM received, shutting down'); 
    server.close(() => { 
        console.log('Server closed'); 
        process.exit(0);
    });
});


// SECTION: GRACEFUL SHUTDOWN (SIGINT)
// This section handles the SIGINT signal, typically triggered by Ctrl+C in the terminal,
// to shut down the server cleanly, similar to the SIGTERM handler.

process.on('SIGINT', () => { 
    console.log('SIGINT received, shutting down');
    server.close(() => {
        console.log('Server closed');
        process.exit(0);
    });
});

// - process.on(event, listener): Same as above, but listens for 'SIGINT', a signal sent when the user interrupts the process (e.g., Ctrl+C).
// - server.close(callback): Same as above, stops the server and runs the callback when complete.
// - process.exit(code): Same as above, exits with code 0 to indicate a clean shutdown.