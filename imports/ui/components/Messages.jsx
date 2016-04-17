import React from 'react';
import Message from './Message';

export default class Messages extends React.Component {
    constructor() {
        super();
        this.deleteMessage = this.deleteMessage.bind(this);
    }
    
    deleteMessage(id) {
        Meteor.call('deleteMessage', id, (error, res) => {
            if (error) {
                console.log(error);
            } else {
                console.log(res);
            }
        })
    }

    render() {
        if (!this.props.loading) {
            return <h1>Loading</h1>
        }
        const msgs = this.props.messages.map(msg => {
            return (
                <Message 
                    key={msg._id}
                    {...msg}
                    deleteMessage={this.deleteMessage}
                    />
            )
        });
        return (
            <ul>
                {msgs}
            </ul>
        )
    }
}
