const http = require("http");
const dotenv = require("dotenv");
// const { error } = require("console");

dotenv.config();

const PORT = process.env.PORT;

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain" });

  res.end(`${process.env.word}`);
});

server.listen(PORT, (error) => {

  if (error) {
    console.log("something went", error);
  } else {
    console.log(`server  is running http://localhost:${PORT} `);
  }
});
