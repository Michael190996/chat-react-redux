import React, {Component} from 'react';
import {Card} from 'react-bootstrap';

class Window extends Component {
    render() {
        return (
            <div id="window">
                {
                    this.props.messages.map((value) => {
                        return <Card body>{value}</Card>
                    })
                }
            </div>
        );
    }
}

export default Window;