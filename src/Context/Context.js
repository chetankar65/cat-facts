import React, {useState} from "react";
import {auth} from '../firebase';
import {useAuthState} from 'react-firebase-hooks/auth';

export const Context = React.createContext();
export const ContextProvider = ({children}) => {
    const [user] = useAuthState(auth);
    //const [hasUserOrdered, setUserOrdered] = useState(false);
    const [messages, setMessages] = useState([])
    return (
        <Context.Provider value={{messages, setMessages}}>
            {children}
        </Context.Provider>
    );
};