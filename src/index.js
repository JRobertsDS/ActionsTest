const http = require('http');
 
const host = '0.0.0.0';
const port = 3000;
 
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World!');
});
 
console.log('Web server running at http://%s:%s',host,2939); // port ); add second magic number

server.listen(port, host, () => {
   console.log('Web server running at http://%s:%s',host,2999); // port );
});
