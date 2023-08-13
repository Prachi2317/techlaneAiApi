const express = require('express');
const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  // Check if the requested URL is the one you want to serve the file for
  if (req.url === '/api/get') {
    // Read the file asynchronously
    fs.readFile('staticData.js', 'utf8', (err, data) => {
      if (err) {
        res.writeHead(500, {'Content-Type': 'text/plain'});
        res.end('Error reading the file');
      } else {
        res.writeHead(200, {'Content-Type': 'text/plain'});
        res.end(data);
      }
    });
  } else {
    res.writeHead(404, {'Content-Type': 'text/plain'});
    res.end('File not found');
  }
});

const PORT = 3000;
server.listen(3000, () => {
  console.log(`Server is running on port ${PORT}`);
});





