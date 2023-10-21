import React, { useState, useEffect, useRef } from 'react';
import Input from './input';
import Messages from './messages';
import Navbar2 from './navbar2';
import {Context} from "../Context/Context";


const Chat = () => {
    const {messages} = React.useContext(Context);
    
    const containerRef = useRef(null)
    useEffect(() => {
        // Scroll to the bottom of the container whenever new messages are added
        containerRef.current?.scrollIntoView({behavior: "smooth"});
      }, [messages]);
    return (
        <div className='chat' ref={containerRef}>
            <Navbar2/>
            <Messages/>
            <Input/>
        </div>
    )
}

export default Chat