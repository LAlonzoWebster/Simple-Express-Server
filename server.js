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

server.use(logger);

server.use('/static', express.static('public'));

// Place for static information 
const people = [`Okay`];

const peopleFactory = ({
        firstName,
        lastName,
        age
    }) =>
    ({
        firstName,
        lastName,
        age,
    });
const peopleRoute = '/people';
// Get route should just return the people array
server.get(peopleRoute, (req, res, next) => {
    // Method - HTTP method used to make the request
    console.log('method: ', req.method);
    // Host
    console.log('host:', req.host);
    // Path - location of the resource requested
    console.log('path: ', req.path);
    // Headers
    console.log('headers: ', req.headers);
    // Query string the url has a querystring if it contains ?
    console.log('query string: ', req.query);
    // Body the request must contain
    console.log('body: ', req.body);
    // Params - if you define your route like /people/:id, then id is a param
    console.log('params: ', req.params);
    if(people.length === 0){
        res.status(400).send('There are no people.');
        return;
    }
    res.json(people);
});
server.post(peopleRoute, (req, res, next) => {

});

server.put(peopleRoute, (req, res, next) => {
    const body =req.body;
    if (typeof body !== req.body ||
        typeof body.firstname !== 'string' ||
        typeof body.lastName !== 'string' ||
        typeof body.age !== 'number' 
){
    res.status(400).send('Invalid person data.');
    return;
}
people.push(peopleFactory(body));

res.json({message: 'People updated', data: body});

});

server.delete(peopleRoute, (req, res, next) => {

});

server.patch(peopleRoute, (req, res, next) => {

});


// Port is listening
server.listen(port, (err) =>
{
    if (err)
    {
        console.log('Error launching server', err);
    }
    console.log(`Server is listening on port: ${port}.`);
});