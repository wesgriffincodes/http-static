const { createServer } = require('http');
const { parse } = require('url');
const fs = require('fs');

const server = createServer((req, res) => {
  const { pathname } = parse(req.url);
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  if(pathname === '/index.html') {
    fs.readFile('public/index.html', (err,  data) => {  
      res.write(data);
      res.end();
    });
  } else {
    res.statusCode = 404;
    res.end();
  }
});


server.listen(7890, () => {
  console.log('listening to 7890');
});


