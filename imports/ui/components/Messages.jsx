import React from 'react';
import Message from './Message';

export default class Messages extends React.Component {
    render() {
        if (!this.props.loading) {
            return <h1>Loading</h1>
        }
        const msgs = this.props.messages.map(msg => {
            return (
                <Message 
                    key={msg._id}
                    msg={msg.message}
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
