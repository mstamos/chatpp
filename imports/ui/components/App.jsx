import React from 'react';
import Input from './Input';
import Messages from './Messages';

export default class App extends React.Component {
    render() {
        const { loading, messages } = this.props; 
        return (
            <div>
                <Input />
                <Messages 
                    loading={loading}
                    messages={messages}
                    />
            </div>
        )
    }
}
