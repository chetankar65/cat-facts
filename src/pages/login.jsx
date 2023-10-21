import React from 'react';
import {auth , provider}  from '../firebase';
import { useNavigate, Link } from 'react-router-dom';
import "../style.scss"

const Login = () => {
    const signin = () => {
        auth.signInWithPopup(provider).catch(alert);
    }

    return (
        <div className='login'>
            <h2>Sign in with google</h2>
            <button onClick={signin}>
                <img src="https://w7.pngwing.com/pngs/249/19/png-transparent-google-logo-g-suite-google-guava-google-plus-company-text-logo.png"/>
            </button>
        </div>
    )
}

export default Login