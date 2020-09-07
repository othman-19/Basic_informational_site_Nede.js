let http = require('http');
let url = require('url');
let fileSystem = require('fs');

http.createServer(function (req, res) {
  let parsedURL = url.parse(req.url, true);
  let paths = ["/contact-me", "/about"];
  let fileName;
  
  if (parsedURL.pathname === "/"){
    fileName = "./index.html"; 
  } else if(paths.includes(parsedURL.pathname)) {
    fileName = "." + parsedURL.pathname + ".html";
  }else {
    fileName = "./404.html"
  };
  
  fileSystem.readFile(fileName, function(err, data) {
    if (err) {
      res.writeHead(404, {"Content-Type": "text/html"});
      res.write("404 Not Found");
      return res.end();
    } 
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    return res.end();
  });
}).listen(8080);