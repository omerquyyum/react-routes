import http from 'http';
import express from 'express';
import socketIo from "socket.io";
require('dotenv').config();

//services
import {page} from './services/index';

const port = process.env.PORT || 4000;

let app = express();
app.use(require('./routes/index'));

const server = http.createServer(app);
const io = socketIo(server);

io.on("connection", socket => {
  console.log("User Client connected");

  socket.on("PAGE", (data) => page(socket, data));

  socket.on("disconnect", () => console.log("User Client disconnected"));
});

server.listen(port, () => console.log(`Listening on port ${port}`));
