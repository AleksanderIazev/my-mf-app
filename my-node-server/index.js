const http = require("http");

const serverOn = http.createServer((res, req) => {
  req.end("Listen");
});

serverOn.listen(8000, "127.0.0.1", () => {
  console.log("Listen");
});
