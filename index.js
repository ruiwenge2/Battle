const express = require("express");
const app = express();
const server = require("http").Server(app);
const io = require("socket.io")(server);

const users = {};
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

app.get("/game/:room", (req, res) => {
  res.sendFile(__dirname + "/public/game.html");
});

io.on("connection", socket => {
  io.on("disconnect", () => {
    
  });
});

server.listen(3000, () => {
  console.log("server started");
});