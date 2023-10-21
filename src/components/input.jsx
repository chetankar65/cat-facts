import React, { useState } from 'react';
import {Context} from "../Context/Context"
import {auth} from '../firebase';
import {useAuthState} from 'react-firebase-hooks/auth';

const Input = () => {
    const {messages, setMessages} = React.useContext(Context);
    const [message, setMessage] = useState("");
    const [user] = useAuthState(auth);

    const handleSubmit = async () => {
        let object = {
            "fact": message,
            "length": message.length,
            "owner": true,
            "user": user.email,
        }

        setMessages(prevMessages => [...prevMessages, object]);

        let x = await fetch('https://catfact.ninja/fact');
        let resp = await x.json();
        resp = { ...resp, "owner": false };
        resp = { ...resp, "user": user.email };
        
        // Use functional update again to access the previous state value correctly
        setMessages(prevMessages => [...prevMessages, resp]);
      
        setMessage("");
    }

    return (
        <>
            <div className='inputArea'>
                <input type='text' placeholder='How can we help you?' value={message} onInput={(e) => setMessage(e.target.value)}/>
                <button onClick={handleSubmit}>Send</button>
            </div>
        </>
    )
}

export default Input;