const express = require('express');
const next = require('next');
const http = require('http');
const socketIo = require('socket.io');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

const server = express();
const port = 80;

// HTTP 서버 생성
const httpServer = http.createServer(server);
const io = socketIo(httpServer);

const connectedClients = {};
const clientBags = {};

app.prepare().then(() => {
  server.use(express.json());

  server.get('/', (req, res) => {
    return app.render(req, res, '/');
  });

  server.post('/data', (req, res) => {
    const data = req.body;
    res.json({
      message: 'Data received successfully',
      receivedData: data
    });
  });

  // Handle all other Next.js page requests
  server.all('*', (req, res) => {
    return handle(req, res);
  });

  io.on('connection', (socket) => {
    console.log('a user connected');
    connectedClients[socket.id] = socket;

    io.emit('viewers', Object.keys(connectedClients).length);
    io.emit('otherBags', Object.values(clientBags));

    socket.on('updateBag', (updatedBag) => {
      clientBags[socket.id] = updatedBag;
      socket.broadcast.emit('otherBags', Object.values(clientBags));
    });

    socket.on('disconnect', () => {
      console.log('user disconnected');
      delete connectedClients[socket.id];
      delete clientBags[socket.id];
      io.emit('viewers', Object.keys(connectedClients).length);
      io.emit('otherBags', Object.values(clientBags));
    });
  });

  httpServer.listen(port, '0.0.0.0', (err) => {
    if (err) throw err;
    console.log(`Server running at port:${port}`);
  });
});
