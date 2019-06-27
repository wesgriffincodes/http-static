const { createServer } = require('http');
const { parse } = require('url');
const fs = require('fs');

const server = createServer((req, res) => {
  const { pathname } = parse(req.url);
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');

  if(pathname === '/index.html') {
    fs.readFile('public/index.html', (err,  data) => {  
      res.end(data);
    });
  } else {
    res.statusCode = 404;
    res.end('FILE NOT FOUND');
  }
});

server.listen(7890, () => {
  console.log('listening to 7890');
});


