import React, {Component} from 'react';
import {Form, Button, InputGroup, FormControl} from 'react-bootstrap';

class Message extends Component {
    submit(event) {
        const form = event.currentTarget;
        event.preventDefault();
        event.stopPropagation();

        const VALUE = form.querySelector('#text').value;

        if (VALUE) {
            this.props.save(VALUE);
        }
    }

    render() {
        return (
            <Form id="message" onSubmit={event => this.submit(event)}>
                <InputGroup>
                    <FormControl id="text"/>
                    <InputGroup.Append>
                        <Button type="submit" variant="outline-secondary">Отправить</Button>
                    </InputGroup.Append>
                </InputGroup>
            </Form>
        );
    }
}

export default Message;