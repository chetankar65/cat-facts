import React from 'react';
import {auth} from '../firebase';
import logo from '../logo.jpg'

const Navbar2 = () => {
    const logout = () => {
        auth.signOut();
    }

    return (
        <div className='navbar'>
            <img src={logo} alt='logo'/>
            <div className='logout'>
                <button onClick={logout}>Logout</button>
            </div>
        </div>
    )
}

export default Navbar2;