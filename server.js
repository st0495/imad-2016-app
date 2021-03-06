var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/ui/style.css', function (req, res) {
   res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});
app.get('/article-one',function(req,res){
   res.sendFile(path.join(__dirname, 'ui', 'article-one.html'));
});
app.get('/article-two',function(req,res){
    res.send("Article two request will be served here");
});
app.get('/article-three',function(req,res){

  res.sendFile(path.join(__dirname, 'ui', 'article-three.html'));
});


app.get('/ui/profile.jpg', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'profile.jpg'));
});
app.get('/ui/Cricket_PNG_logo.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'Cricket_PNG_logo.png'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});
app.get('/ui/cricket2.jpg', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'cricket2.jpg'));
});
app.get('/ui/download.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'download.png'));
});

var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
