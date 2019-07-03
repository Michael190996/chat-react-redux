import {GETMESSAGES, NEWMESSAGE} from './actions';

const INITSTATE = {
    messages: []
};

export default function (state = INITSTATE, action) {
    switch (action.type) {
        case GETMESSAGES:
            return {
                ...state,
                messages: action.payload
            };

        case NEWMESSAGE:
            return {
                ...state,
                messages: [...state.messages, action.payload]
            };

        default:
            return state
    }
}