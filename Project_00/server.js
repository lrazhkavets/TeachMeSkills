var http = require('http');
var url = require('url');
var querystring = require('querystring');
var static = require('node-static');
var file = new static.Server('.', {
  cache: 0
});


function accept(req, res) {

  if (req.url == '/employees.json') {
    file.serve(req, res)};

  if (req.url == '/00.json') {
    file.serve(req, res)};

  if (req.url == '/01.json') {
      file.serve(req, res)};

  if (req.url == '/02.json') {
      file.serve(req, res)};

  if (req.url == '/03.json') {
      file.serve(req, res)

}else {
      file.serve(req, res);
    };
  };

if (!module.parent) {
  http.createServer(accept).listen(8080);
} else {
  exports.accept = accept;
}