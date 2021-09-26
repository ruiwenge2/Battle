socket.emit("check", user, room, weapon, canvas.width, canvas.height);

socket.on("gamestate", update);

socket.on("error", err => {
  if(!err) return;
  else alertmodal("", err).then(() => location.href = "/");
});

socket.on("hit_by_arrow", async user => {
  await showMessage(`${user} shot you with an arrow.`, 1);
})

document.addEventListener("keydown", e => {
  if(e.key == "ArrowRight" || e.key == "d"){
    socket.emit("move", "right", room);
  }
  else if(e.key == "ArrowLeft" || e.key == "a"){
    socket.emit("move", "left", room);
  }
  else if(e.key == "ArrowUp" || e.key == "w"){
    socket.emit("move", "up", room);
  }
  else if(e.key == "ArrowDown" || e.key == "s"){
    socket.emit("move", "down", room);
  }
  else if(e.code == "Space"){
    socket.emit("useweapon");
  }
});

document.addEventListener("keyup", e => {
  socket.emit("releasekey", room);
});

showMessage("Loading...", 1);