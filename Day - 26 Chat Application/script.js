// Connect to WebSocket server
const socket = new WebSocket('ws://localhost:8080');

const usernameInput = document.getElementById('usernameInput');
const joinButton = document.getElementById('joinButton');
const chatContainer = document.getElementById('chat-container');
const loginContainer = document.getElementById('login-container');
const messageInput = document.getElementById('messageInput');
const sendButton = document.getElementById('sendButton');
const roomInput = document.getElementById('roomInput');
const createRoomButton = document.getElementById('createRoomButton');
const joinRoomButton = document.getElementById('joinRoomButton');
const chatWindow = document.getElementById('chat-window');

// Display room management options and hide chat window initially
function showRoomManagement() {
    loginContainer.style.display = 'none';
    chatContainer.style.display = 'flex';
}

// Show alert and prevent sending messages if no room is joined
function disableChat() {
    messageInput.disabled = true;
    sendButton.disabled = true;
    alert('Please create or join a room first.');
}

function addMessageToChat(message, isOwnMessage) {
    const messageElement = document.createElement('div');
    messageElement.className = `message ${isOwnMessage ? 'right' : 'left'}`;
    
    const username = localStorage.getItem('username');
    messageElement.textContent = `${username}: ${message}`;
    
    chatWindow.appendChild(messageElement);
    chatWindow.scrollTop = chatWindow.scrollHeight; 
}

function sendMessage() {
    const message = messageInput.value.trim();
    if (message === '') return;

    socket.send(JSON.stringify({ type: 'message', content: message }));
    addMessageToChat(message, true); 
    messageInput.value = ''; 
}

document.getElementById('sendButton').addEventListener('click', sendMessage);

document.getElementById('messageInput').addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        e.preventDefault();
        sendMessage();
    }
});

document.getElementById('joinButton').addEventListener('click', () => {
    const username = usernameInput.value.trim();
    if (username === '') {
        alert('Please enter a username');
        return;
    }

    localStorage.setItem('username', username);
    showRoomManagement();
});

socket.onopen = () => {
    console.log('Connected to WebSocket server');
};

socket.onmessage = (event) => {
    const data = JSON.parse(event.data);
    const { type, content, sender } = data;

    if (type === 'message') {
        addMessageToChat(content, sender === localStorage.getItem('username'));
    } else if (type === 'roomCreated' || type === 'joinedRoom') {
        messageInput.disabled = false;
        sendButton.disabled = false;
        chatWindow.innerHTML += `<div class="message">You have ${type === 'roomCreated' ? 'created' : 'joined'} the room.</div>`;
    } else if (type === 'roomNotFound' || type === 'roomExists') {
        alert(content);
    } else if (type === 'userLeft') {
        chatWindow.innerHTML += `<div class="message">A user has left the room.</div>`;
    } else if (type === 'newUser') {
        chatWindow.innerHTML += `<div class="message">${content}</div>`;
    }
};

socket.onerror = (error) => {
    console.error('WebSocket error:', error);
};

socket.onclose = () => {
    console.log('Disconnected from WebSocket server');
};

// Create room button click handler
createRoomButton.addEventListener('click', () => {
    const roomName = roomInput.value.trim();
    if (roomName) {
        socket.send(JSON.stringify({ type: 'createRoom', roomName }));
    } else {
        alert('Please enter a room name.');
    }
});

// Join room button click handler
joinRoomButton.addEventListener('click', () => {
    const roomName = roomInput.value.trim();
    if (roomName) {
        socket.send(JSON.stringify({ type: 'joinRoom', roomName }));
    } else {
        alert('Please enter a room name.');
    }
});

// Send message button click handler
sendButton.addEventListener('click', () => {
    const message = messageInput.value.trim();
    if (message) {
        socket.send(JSON.stringify({ type: 'message', content: message }));
        messageInput.value = ''; 
    } else {
        disableChat();
    }
});

// Enter key for username input
usernameInput.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        joinButton.click();
    }
});