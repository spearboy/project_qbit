import { Server } from "socket.io";

const ioHandler = (req, res) => {
  if (!res.socket.server.io) {
    console.log("Initializing WebSocket server...");
    const io = new Server(res.socket.server);

    io.on("connection", (socket) => {
      console.log("New client connected");

      // Broadcast current viewers count
      const broadcastViewersCount = () => {
        const viewers = io.engine.clientsCount;
        io.emit("viewers", viewers);
      };

      broadcastViewersCount();

      socket.on("disconnect", () => {
        console.log("Client disconnected");
        broadcastViewersCount();
      });
    });

    res.socket.server.io = io;
  }
  res.end();
};

export default ioHandler;
