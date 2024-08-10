const WebSocket = require('ws');

// Initialize WebSocket server
const wss = new WebSocket.Server({ port: 8080 });

// Object to store rooms and their connected clients
const rooms = {};

wss.on('connection', (ws) => {
    let currentRoom = null;

    // Handle incoming messages
    ws.on('message', (message) => {
        const parsedMessage = JSON.parse(message);
        const { type, roomName, content, username } = parsedMessage;

        switch (type) {
            case 'createRoom':
                if (!rooms[roomName]) {
                    rooms[roomName] = new Set();
                    ws.send(JSON.stringify({ type: 'roomCreated', roomName }));
                } else {
                    ws.send(JSON.stringify({ type: 'roomExists', roomName }));
                }
                break;

            case 'joinRoom':
                if (rooms[roomName]) {
                    rooms[roomName].add(ws);
                    currentRoom = roomName;
                    ws.send(JSON.stringify({ type: 'joinedRoom', roomName }));
                    broadcastToRoom(roomName, { type: 'newUser', content: `${username} has joined the room` });
                } else {
                    ws.send(JSON.stringify({ type: 'roomNotFound', roomName }));
                }
                break;

            case 'message':
                if (currentRoom) {
                    broadcastToRoom(currentRoom, { type: 'message', content, sender: username });
                }
                break;
        }
    });

    // Handle client disconnect
    ws.on('close', () => {
        if (currentRoom && rooms[currentRoom]) {
            rooms[currentRoom].delete(ws);
            broadcastToRoom(currentRoom, { type: 'userLeft', content: 'A user has left the room' });
            // Clean up the room if it is empty
            if (rooms[currentRoom].size === 0) {
                delete rooms[currentRoom];
            }
        }
    });

    // Broadcast message to all clients in the specified room
    function broadcastToRoom(roomName, message) {
        if (rooms[roomName]) {
            rooms[roomName].forEach(client => {
                if (client.readyState === WebSocket.OPEN) {
                    client.send(JSON.stringify(message));
                }
            });
        }
    }
});

console.log('WebSocket server is running on ws://localhost:8080');