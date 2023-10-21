import React, {useState} from "react";

export const AuthContext = React.createContext();
export const AuthContextProvider = ({children}) => {
    //const [hasUserOrdered, setUserOrdered] = useState(false);
    const [currentUser, setCurrentUser] = useState(null)
    return (
        <AuthContextProvider.Provider value={{currentUser, setCurrentUser}}>
            {children}
        </AuthContextProvider.Provider>
    );
};