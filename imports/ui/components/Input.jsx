import React from 'react';
import { Meteor } from 'meteor/meteor';

export default class Input extends React.Component {
    constructor() {
        super();
        this.sendMessage = this.sendMessage.bind(this)
    }

    sendMessage(event) {
        event.preventDefault()
        let inputValue = this.refs.inputField;
        Meteor.call('insertMessage', inputValue.value, (err, res) => {
            if (err) {
                console.log(err);
            } else {
                inputValue.value = "";
            }
        })
    }

    render() {
        return (
            <div>
                <input ref="inputField" placeholder="Message"/>
                <button onClick={this.sendMessage}>Send</button>
            </div>
        )
    }
}
