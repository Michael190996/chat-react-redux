import React, {Component} from 'react';
import {Message} from './';

class MessageContainer extends Component {
    constructor(props) {
        super(props);

        this.save = this.save.bind(this);
    }

    save (data) {
        this.props.socket.emit('save', {data});
    }

    render() {
        return (
            <Message save={this.save}/>
        );
    }
}

export default MessageContainer;