// import dependencies
var express = require('express'),
    morgan = require('morgan'),
    bodyParser = require('body-parser'),
    fib = require('./fib'),
    FibResponse = require('./fibresponse');

// create express app
var app = express(),
    port = process.env.PORT || 3000,
    publicDirectory = require('path').join(__dirname, '/public');

// logging middleware
app.use(morgan('dev'));

// middleware that parses JSON out of the content of requests
app.use(bodyParser.json());

// middleware for serving up static content from public directory
// this will terminate the pipeline if a file is found to match the request
app.use(express.static(publicDirectory));

/**
 * Fibonacci webservice.
 *
 * Extracts a sequence number out of the request and returns the
 * fibonacci number corresponding to that sequence number.
 */
app.get('/fib/:number', function(req, res){
  // unpack request
  var sequenceNumber = Number(req.params.number);

  // call business service
  var fibNumber = fib.sequence(sequenceNumber);

  // package response
  fibResponse = new FibResponse(sequenceNumber, fibNumber);

  // respond with JSON
  res.send(JSON.stringify(fibResponse));
});

// start the server
app.listen(port, function(){
    console.log("Express server listening on port %s", port);
});
