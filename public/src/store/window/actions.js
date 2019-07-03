export const GETMESSAGES = 'WINDOW_GET_MESSAGES';
export const NEWMESSAGE = 'WINDOW_NEW_MESSAGE';

export const getMessages = messages => ({
    type: GETMESSAGES,
    payload: messages
});

export const newMessage = message => ({
    type: NEWMESSAGE,
    payload: message
});