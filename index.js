//importing node framework
var express = require('express');
 
var app = express();
//Respond with "hello world" for requests that hit our root "/"
app.get('/', function (req, res) {
 res.send('.... PIPELINE IS WORKING AFTER CHANGES ✓ ....\n');
});
//listen to port 3001 by default
app.listen(process.env.PORT || 3001);
 
module.exports = app;
