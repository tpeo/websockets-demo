/**
 * Simple demonstration of websockets using the websockets library and supporting a single connection
 * Spins up a simple http server that can take a single websocket connection
 * Once a connection is established, the server sends the number of seconds since the connection has been established every second
 * The client can also send data to the server where the server will log out the message contents
 */

// This is one of many libraries for websockets (alt; SocketIO)
const WebSocketServer = require("websocket").server;
const http = require("http");
const server = http.createServer((req, res) => {});

// Local Variable: not best practice
let connection = null;

// Boilerplate
const websocket = new WebSocketServer({
  httpServer: server,
});

websocket.on("request", (request) => {
  // Handshake
  connection = request.accept(null, request.origin);

  // Bidirectional Communication: server sends client time since request every second without client explicitly requesting
  let i = 0;
  setInterval(() => {
    connection.send(`${i++}`);
  }, 1000);

  // Handle messages incoming to server
  connection.on("message", (message) => {
    const data = JSON.parse(message.utf8Data);
    console.log(`Received message: ${data.message}`);
  });
});

server.listen(5000, () => console.log("Server on port 5000"));
