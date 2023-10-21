import React, { useState, useEffect } from 'react';
import {auth} from '../firebase';

import {useAuthState} from 'react-firebase-hooks/auth';

const Navbar = () => {
    const [user] = useAuthState(auth);
    return (
        <div className='navbar'>
            <div className='profile'>
                <img src={user.photoURL} alt={user.displayName} />
                <span className='user'>{user.displayName}</span>
            </div>
        </div>
    )
}

export default Navbar;