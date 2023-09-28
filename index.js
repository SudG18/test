var http = require('http');

var server = http.createServer(function (req, res) {
    if (req.url == '/') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write('<html><body><p>This is the Default Page of the Server and its working fine. If You have not specified anything or a Address, this page should be visible. Final changes on 09/28,verification pending!!</p></body></html>');
        res.end();

    }
    else if (req.url == "/home") {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write('<html><body><p>This is Home Page. Hello All And Good Morning. This page was added by AWS Code Pipeline. </p></body></html>');
        res.end();

    }
