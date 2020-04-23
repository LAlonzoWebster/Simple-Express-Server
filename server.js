// Import necessary dependencies
const express = require('express');

// Set up server constants
const port = 3888;
const serverName = 'Simple Express Web Server';

// Create the server
const server = express();

// Place for Middleware
const logger = (req, res, next) => 
{
    console.log(req.method, req.path);
    next();
}

app.use(logger);

// Place for Routing information 



// Port is listening
server.listen(port, (err) =>
{
    if (err)
    {
        console.log('Error launching server', err);
    }
    console.log(`Server is listening on port: ${port}.`);
});