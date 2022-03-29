import React, { useState } from 'react'
import "bootstrap/dist/css/bootstrap.css";
import './AddUser.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCirclePlus} from '@fortawesome/free-solid-svg-icons';


function AddUser() {

    const [name, setName] = useState(
        [
            {
                name:"",
            }
        ]
    )

    const addPerson=(e)=>{
        e.preventDefault ();
        props.addUser({
            id: Date.now(), 
            name: name, 
            image: 'https://upload.wikimedia.org/wikipedia/commons/7/7a/Mangekyou_Sharingan_Sasuke.svg'
        })
    }

    const handleChange = (props) =>{
        this.useState({name : e.target.value})
    }



    return (
        <div className='box'>
            <div class="mb-3">
                <input type="text" onChange={handleChange} placeholder="User Name 👨‍💼" />
                <button onClick={addPerson}> <FontAwesomeIcon icon={faCirclePlus} /> </button>
            </div>
        </div>
    )
}

export default AddUser