const ChatService = require('./service');

module.exports = {
    /**
     * @function
     * @description socket.io
     * @param {express.Application} io
     * @returns void
     */
    init(io) {
        io.on('connect', (socket) => {
            socket.on('join', async ({ name, room }) => {
                const user = await ChatService.create({ id: socket.id, name, room });

                socket.join(user.room);

                socket.emit('message', { user: 'admin', text: `${user.name}, welcome to room ${user.room}.` });
                socket.broadcast.to(user.room).emit('message', { user: 'admin', text: `${user.name} has joined!` });

                io.to(user.room).emit('roomData', { room: user.room, users: ChatService.findAllMembers(user.room) });
            });

            socket.on('sendMessage', async (message) => {
                const user = await ChatService.find(socket.id);

                io.to(user.room).emit('message', { user: user.name, text: message });
            });

            socket.on('disconnect', async () => {
                const user = await ChatService.deleteById(socket.id);

                if (user) {
                    io.to(user.room).emit('message', { user: 'Admin', text: `${user.name} has left.` });
                    io.to(user.room).emit('roomData', { room: user.room, users: ChatService.findAllMembers(user.room) });
                }
            });
        });
    },
};
