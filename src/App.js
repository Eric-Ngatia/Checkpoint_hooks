import './App.css';
import "bootstrap/dist/css/bootstrap.css";
import AddUser from './Components/AddUser';
import UserList from './Components/UserList';
import User from './Components/User';
import React,{ useState }  from "react";



function App() {

  const [users, setUsers] = useState (
    [
      {
        id: Date.now(),
        name:"Eric N'Gatia",
        image: 'https://upload.wikimedia.org/wikipedia/commons/7/7a/Mangekyou_Sharingan_Sasuke.svg'
      }
    ]
    
  );

  const deleteUser = (id) =>{
    let newUsers = [...users];

    let index = newUsers.findIndex((user) => user.id == id);

    newUsers.splice(index, 1);

    setUsers({users : newUsers});

  }


  const addUser = (user) =>{
    let newUsers = [...users];
    newUsers.push(user);

    this.setUsers({users : newUsers});

    this.setUsers = ({users : newUsers});
  }



  return (
    <div className="App">
      <AddUser addUser = {addUser} />
      <hr/>
      <UserList users={users} deleteUser={deleteUser} />
    </div>
  );
};


export default App;
