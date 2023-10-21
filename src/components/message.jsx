import React from 'react';
import {Context} from "../Context/Context";
import {auth} from '../firebase';
import {useAuthState} from 'react-firebase-hooks/auth';

const Message = ({message}) => {
    const {messages, setMessages} = React.useContext(Context);
    const [user] = useAuthState(auth);

    const callAPI = async () => {
        let x = await fetch('https://catfact.ninja/fact');
        let resp = await x.json();
        resp = { ...resp, "owner": false };
        resp = { ...resp, "user": user.email };
        // Use functional update again to access the previous state value correctly
        setMessages(prevMessages => [...prevMessages, resp]);
    }

    return (
        <>
        {message.user === user.email && message.owner && 
            <div className='message-user'>
                <span>You</span>
                <p>{message.fact}</p>
                <button onClick={() => callAPI()}>Call API again</button>
            </div>
        }

        {message.user === user.email && !message.owner && 
            <div className='message'>
                <span>Bot</span>
                <p>{message.fact}</p>
            </div>
        }
        </>
    )
}

export default Message;