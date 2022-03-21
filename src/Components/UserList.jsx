import React from 'react';
import './UserList.css';
import "bootstrap/dist/css/bootstrap.css";
import User from './User';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


export const UserList=()=>{
    return (
        <div className='card'>
            {this.props.users.map(user => <User key={user.id} user={user} deleteUser={this.props.deleteUser}/>)}  
        </div>
    )
}

export default UserList