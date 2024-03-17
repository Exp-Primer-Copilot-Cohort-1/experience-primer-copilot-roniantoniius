// Create web server
// Create a web server that listens on port 3000 and serves a file comments.html. The comments.html file should be in the same directory as the comments.js file.

const http = require('http');
const fs = require('fs');
const path = require('path');
const filePath = path.join(__dirname, 'comments.html');

const server = http.createServer((req, res) => {
  fs.readFile(filePath, (err, data) => {
    if (err) {
      res.writeHead(404);
      res.end('Not Found');
    } else {
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.end(data);
    }
  });
});

server.listen(3000);