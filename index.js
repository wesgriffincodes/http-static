const { createServer } = require('http');
const { parse } = require('url');


const server = createServer((req, res) => {
  const { pathname } = parse(req.url);
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.write('working');
  res.end();
});

server.listen(7890, () => {
  console.log('listening on 7890');
});
