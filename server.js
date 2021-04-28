// server.js
// where your node app starts

// init project
require('dotenv').config();
var express = require('express');
var app = express();

// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC 
var cors = require('cors');
app.use(cors({optionsSuccessStatus: 200}));  // some legacy browsers choke on 204

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});

app.get('/api/whoami', (req, res)=>{
  let ipaddressString = req.ip;
  let languageString = req.headers["accept-language"];
  let softwareString = req.headers["user-agent"];

  res.json({
    ipaddress: ipaddressString, 
    language: languageString, 
    software: softwareString});
});

// your first API endpoint... 
app.get("/api/hello", function (req, res) {
  res.json({greeting: 'hellssso API'});
});


// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
