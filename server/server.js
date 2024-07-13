const port = process.env.PORT || 5000;
const io = require("socket.io")(port, {
  cors: {
    origin: "http://localhost:5173",
    methods: ["GET", "POST"],
  },
});
io.on("connection", (socket) => {
  console.log("user online");
  socket.on("canvas-data", (data) => {
    socket.broadcast.emit("canvas-data", data);
  });
});
