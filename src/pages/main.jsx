import React from 'react';
import Sidebar from "../components/sidebar"
import Chat from "../components/chat"
import "../style.scss"

const Main = () => {
    return (
        <div className='main'>
            <Sidebar/>
            <Chat/>
        </div>
    )
}

export default Main