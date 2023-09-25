const express = require('express');
const next = require('next');
const middleware = require('./src/app/middleware');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();

  // Use the middleware
  server.use(middleware);

  // Request handler
  server.all('*', (req, res) => {
    // Handle the request using Next.js
    return handle(req, res);
  });

  server.listen(3000, (err) => {
    if (err) throw err;
    console.log('> Ready on http://localhost:3000');
  });
});
