import React from 'react';

const Message = ({_id, message, deleteMessage }) => {
    return (
        <li>{message}
            <span>&nbsp;&nbsp;</span>
            <span onClick={(e) => deleteMessage(_id)}>&times;</span>
        </li>
    )
}

export default Message;
