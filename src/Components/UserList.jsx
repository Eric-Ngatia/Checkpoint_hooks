import React from 'react';
import './UserList.css';
import "bootstrap/dist/css/bootstrap.css";
import User from './User';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


export const UserList=(props)=>{
    return (
        <div className=''>
            {props.users.map(user =>
                <User 
                id={user.id} 
                user={user} 
                deleteUser={props.deleteUser}/>)}  
        </div>
    )
}

export default UserList;