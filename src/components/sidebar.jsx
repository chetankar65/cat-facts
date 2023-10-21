import React, { useEffect, useState } from 'react';
import Navbar from './navbar';
import SingleAction from './action';
import {Context} from "../Context/Context"
import {v4 as uuid} from "uuid"


const Sidebar = () => {
    const {messages} = React.useContext(Context);
    const [action, setAction] = useState([]);
    
    const getActivities = async () => {
        let arr = []
        for (let k = 0; k < 5; k++) {
          arr[k] =  new Promise(async (resolve, reject) => {
            fetch('http://www.boredapi.com/api/activity/').then((response) => {
              resolve(response.json())
            })
          })
        }
        Promise.all(arr).then((results) => {
            setAction(results)
        })
      }
      
      useEffect(() => {
        getActivities()
      }, [])

    return (
        <div className='sidebar'>
            <Navbar/>
            {
                action.map(action => (
                    <SingleAction action={action} key={uuid()}/>
                ))
            }
        </div>
    )
}

export default Sidebar;