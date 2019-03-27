const http = require('http');
const app = require('./backend/app');
// debug needed to run nodemon without warning
const debug = require("debug")("node-angular")
const port =  process.env.PORT || 4000;

app.set('port', port);
const server = http.createServer(app);
server.listen(port);