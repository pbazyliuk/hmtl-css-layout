const http = require('http');
const express = require('express');
const app = express();

// constant port value (can be changed if needed)
const port = 8080;

// serve static content from webroot folder
app.use(express.static('src'));
// response with 404 error if url is invalid
app.use((req, res, next) => {
  res.status(404).send();
})

app.get('/', function (req, res) {
  res.sendfile('index.html');
});

// starting server
http.createServer(app)
  .listen(port, () => {
    console.log(`Service was started successfully on port ${port}`);
  }).on('error', err => {
    // custom error handling to print more userfriendly error message
    // if port is already used by other app
    if (err.code === 'EADDRINUSE') {
      console.log(`Error: port address ${port} already in use`);
    } else {
      console.log(`Error: ${err.message}`);
    }
    process.exit(1);
  });

