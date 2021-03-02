import dotenv from "dotenv";
dotenv.config();
import express from "express";
import socketIO from 'socket.io'
import {startSocket} from './socket' 
import cors from 'cors'
import corsOptions from './config/cors.js'

const app = express();
import http  from 'http'
const server = http.createServer(app)
const io = socketIO(server)
app.use(express.json());
app.use(express.static('./frontendreact/build/'));
app.use(cors(corsOptions));
app.get("/productos", function (req, res) {
  let path = "index.html";
  res.sendFile(path, { root: './frontendreact/build/' });
});

io.on('connect', (client) => {
  client.broadcast.emit('mensaje', 'Desde el server')
  console.log('sss',client.id)
  client.on('mensaje del chat', (message) => {
      console.log(message)
      io.emit('mensaje del chat', message)
  })
})

const PORT = process.env.PORT || 8080;

server.listen(PORT, () => {
  console.log(`Aplicacion en puerto ${PORT}`);
});

import { productos } from "./routes";

app.use("/api/productos", productos,(req,res,next)=>{
  let message = req.message;
  console.log(message)
  io.sockets.emit('mensaje', message);
  //res.json(json)
});



