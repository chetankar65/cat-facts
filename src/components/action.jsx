import React from 'react';
import {Context} from "../Context/Context"
import useClipboard from '../useClipboard';

const SingleAction = ({action}) => {
    const { copied, copyToClipboard } = useClipboard();

    return (
        <>
            <div className='single_action'>
                {!copied && <button className='actionText' onClick={() => copyToClipboard(action.activity)}>I am bored!</button>}
                {copied && <button className='actionText' onClick={() => copyToClipboard(action.activity)}>Copied</button>}
            </div>
            <hr></hr>
        </>
    )
}

export default SingleAction;