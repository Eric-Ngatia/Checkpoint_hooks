import React from 'react'
import './User.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faTrash} from '@fortawesome/free-solid-svg-icons';


function User(props) {


    return (
        <div className='container-user'>
            <div className='user-card'>
                <div className='user-img'>
                    <img height={80} width={80} src={props.image} alt="#" />
                </div>

                <div className='user-id'>
                    <h2> {props.name} </h2>
                    <p>Développeur FullSatck</p>
                </div>

                <button className='delete' onClick={()=> this.deletUser(this.props.user.id)}> <FontAwesomeIcon  icon={faTrash}/> </button>
            </div>
        </div>
    )
}

export default User