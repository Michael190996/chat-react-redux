import React, {Component} from 'react';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import io from 'socket.io-client';
import {MessageContainer, WindowContainer} from './components';
import reducer from './store';
import config from './config';

const store = createStore(reducer);

class App extends Component {
    socket = io(config.SOCKET);

    render() {
        return (
            <Provider store={store}>
                <WindowContainer socket={this.socket}/>
                <MessageContainer socket={this.socket}/>
            </Provider>
        );
    }
}

export default App;