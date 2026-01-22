// Simple Node.js server
const http = require('http');

const hostname = 'localhost';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello! This is a Node.js application\n');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
  console.log('Press Ctrl+C to stop the server');
  
  // Auto-stop after 5 seconds for CI/CD purposes
  setTimeout(() => {
    console.log('Server shutting down...');
    server.close();
    process.exit(0);
  }, 5000);
});
