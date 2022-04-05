# Websockets Demo 
Websockets are a TCP-based protocol that are initiated by HTTP (Upgrade) request. It allows us to establish a bidirectional communication channel between server and client and is used commonly in livestreams, web multiplayer gaming, and chat applications.

The demo we have below is a basic web socket server running a basic NodeJS webserver which can accept client requests, send messages, and receive messages. There is no other functionality but feel free to make a PR if you get any ideas!

## Backend
Install the backend dependencies by running
`npm install`

Run the backend by typing
`npm run dev`

## Frontend
There is no frontend in this demo but you can build one yourself :)

 If you want to interact with the backend, you can open up a browser and type the following

 `let ws = new WebSocket("ws://localhost:5000")` : to create a new websocket connection

 `ws.onmessage = message => console.log(message)` : to retrieve and log messages from the server

 `ws.send(JSON.stringify({"message": "<YOUR MESSAGE>"}))`: to send a message to the server via websocket
 
 
 ## Credits
 Most code and ideas taken from this awesome Youtube video https://www.youtube.com/watch?v=2Nt-ZrNP22A
