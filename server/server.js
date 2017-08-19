const express = require('express');
const path = require('path');
const app = express();
const config = require('./config.js');

app.use(express.static(path.join(__dirname, 'build')));

app.use("/static/media/", express.static(__dirname + '/../build/static/media'));
app.use("/static/css/", express.static(__dirname + '/../build/static/css'));
app.use("/static/js/", express.static(__dirname + '/../build/static/js'));
app.use("/service-worker.js", express.static(__dirname + '/../build'));

app.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname, '/../build', 'index.html'));
  });

app.listen(config.port, () => console.log('listening to connections on port: ' + config.port));