import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Window} from './';
import {getMessages, newMessage} from '../store/window/actions';

class WindowContainer extends Component {
    componentWillMount() {
        this.props.socket.on('messages', messages => this.props.getMessages(messages));
        this.props.socket.on('newMessage', message => this.props.newMessage(message));
    }

    render() {
        return (
            <Window messages={this.props.messages}/>
        );
    }
}

export default connect((state) => ({
    messages: state.window.messages
}), {getMessages, newMessage})(WindowContainer);