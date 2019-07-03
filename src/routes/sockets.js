import IO from 'koa-socket-2';
import {Messages} from '../models';

const io = new IO();

io.on('connection', async ({socket}) => {
    const MESSAGES = await Messages.getMessages()
        .then(messages => messages.map(({message}) => message));

    socket.on('save', async (ctx) => {
        await Messages.setMessage(ctx.data);
        socket.emit('newMessage', ctx.data);
        socket.broadcast.emit('newMessage', ctx.data);
    });

    socket.on('delete', async (ctx) => {
        const {id: ID} = ctx.data;

        await Messages.deleteMessage(ID);
        socket.emit('deleteMessage', ID);
        socket.broadcast.emit('deleteMessage', ID);
    });

    socket.on('update', async (ctx) => {
        const {id: ID, message: MESSAGE} = ctx.data;

        await Messages.editMessage(ID, MESSAGE);
        socket.emit('editMessage', ctx.data);
        socket.broadcast.emit('editMessage', ctx.data);
    });

    socket.emit('messages', MESSAGES);
});



export default io;