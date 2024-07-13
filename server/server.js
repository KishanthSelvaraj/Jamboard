const port = "https://jamboard-server.vercel.app/"
const io = require("socket.io")(port, {
  cors: {
    origin: "https://jamboard-navy.vercel.app/",
    methods: ["GET", "POST"],
  },
});
io.on("connection", (socket) => {
  console.log("user online");
  socket.on("canvas-data", (data) => {
    socket.broadcast.emit("canvas-data", data);
  });
});