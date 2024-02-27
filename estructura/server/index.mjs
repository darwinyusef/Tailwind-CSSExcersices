import { Server } from 'socket.io';
import { createServer } from 'http';

const httpServer = createServer();
const io = new Server(httpServer, {
    cors: {
        origin: '*',
    },
});

io.on('connection', (socket) => {
    console.log('Cliente conectado', socket.id);

    socket.on('mensaje', (data) => {
        console.log('Mensaje recibido:', data);
        io.emit('mensaje', data); // Emite el mensaje a todos los clientes conectados
    });

    socket.on('disconnect', () => {
        console.log('Cliente desconectado', socket.id);
    });
});

httpServer.listen(3000, () => {
    console.log('Servidor escuchando en el puerto 3000');
});