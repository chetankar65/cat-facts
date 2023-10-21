import React, { useState, useEffect } from 'react';
import Message from './message';
import {Context} from "../Context/Context"
import {v4 as uuid} from "uuid"


const Messages = () => {
    const {messages} = React.useContext(Context);

    return (
        <div className='messages'>
            {
                messages.map(m => (
                    <Message message={m} key={uuid()}/>
                ))
            }
        </div>
    )
}

export default Messages;