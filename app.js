const express = require('express');
const app = express();
let hostname = "127.0.0.1"
let port = "8000"

app.get('/', (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.get('/about', (req, res) => {
  res.sendFile(__dirname + "/about.html");
});

app.get('/contact-me', (req, res) => {
  res.sendFile(__dirname + "/contact-me.html");
});

app.get('*', function(req, res){
  res.sendFile(__dirname + "/404.html");
});

// app.listen(8000, () => {
//   console.log('Example app listening on port 8000!')
// });


app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});