const { createServer } = require('http');
const { parse } = require('url');

const makeHtml = (greeting, colorize) => {
  return /*html*/`<!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <title>Document</title>
      <style>
          h1 {
              color: ${colorize && greeting};
          }
      </style>
  </head>
  <body>
      <h1>${greeting}</h1>
      <a href="dogs">dog</a>
  </body>
  </html>`;
};

const app = createServer((req, res) => {
  const { pathname } = parse(req.url);
  res.statusCode = 200;

  res.setHeader('Content-Type', 'text/html');

  if(pathname === '/') {
    res.end(makeHtml('Welcome'));
  } else if(pathname === '/red') {
    res.end(makeHtml('Red', true));
  } else if(pathname === '/blue') {
    res.end(makeHtml('Blue', true));
  } else if(pathname === '/green') {
    res.end(makeHtml('Green', true));
  } else {
    res.statusCode = 404;
    res.end(makeHtml('not found'));
  }
});

module.exports = app;

