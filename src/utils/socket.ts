import { Server } from 'socket.io';

export default function initializeSocket(io: Server) {
  io.on('connection', (socket) => {
    console.log('A user connected');

    socket.on('chat message', (msgData) => {
      io.emit('chat message', msgData);
    });

    socket.on('disconnect', () => {
      console.log('User disconnected');
    });
  });
}