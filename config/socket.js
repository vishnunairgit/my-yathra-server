const { Server } = require('socket.io');
const httpServer = require('../bin/www'); // Ensure this exports the HTTP server instance

const io = new Server(httpServer, {
  cors: {
    origin: 'http://localhost:3000',
    methods: ['GET', 'POST'],
  },
});

io.on('connection', (socket) => {
  console.log('A user connected');
  
  // Example of emitting an event
  socket.emit('newJobNotification', { message: 'Welcome!' });

  socket.on('disconnect', () => {
    console.log('User disconnected');
  });
});

module.exports = io;

