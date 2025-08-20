const express = require("express");
const app = express();
const http = require("http").createServer(app);
const io = require("socket.io")(http);

let players = {};

app.use(express.static("public"));

io.on("connection", (socket) => {
  console.log("Yeni oyunçu qoşuldu:", socket.id);
  players[socket.id] = { x: 100, y: 100, score: 0 };

  io.emit("state", players);

  socket.on("move", (data) => {
    if (players[socket.id]) {
      players[socket.id].x += data.dx;
      players[socket.id].y += data.dy;
      io.emit("state", players);
    }
  });

  socket.on("shoot", (targetId) => {
    if (players[targetId]) {
      players[socket.id].score += 1;
      io.emit("state", players);
    }
  });

  socket.on("disconnect", () => {
    delete players[socket.id];
    io.emit("state", players);
  });
});

http.listen(process.env.PORT || 3000, () => {
  console.log("Server işləyir!");
});
