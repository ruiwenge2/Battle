const express = require("express");
const app = express();
const server = require("http").Server(app);
const io = require("socket.io")(server);
app.use(express.static("public"));

const socketfunc = require("./socketfunction");
const update = require("./update");
const { Sword, Arrow, updateWeapons } = require("./weapon");
var __dirname = "/home/runner/Game";

global.io = io;
global.users = {};
global.max = 6;
global.speed = 11;
global.radius = 37.5;
global.min_rock_size = 20;
global.max_rock_size = 100;
global.rock_boundary = 1200;
global.arrow_speed = 20;
global.sword_length = 30;
global.weapon_limits = {
  sword:12,
  arrow:15
}

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

app.get("/game", (req, res) => {
  res.redirect("/");
});

app.get("/game/:room", (req, res) => {
  res.sendFile(__dirname + "/public/game.html");
});

io.on("connection", socketfunc);
update();

server.listen(3000);