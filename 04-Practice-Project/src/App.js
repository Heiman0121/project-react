import React, {useState} from 'react';
import AddUser from './Component/Users/AddUser';
import UsersList from './Component/Users/UsersList';

function App() {
  
  const [usersList,setUserList] = useState ([]);

  const addUserHandler = (uName, uAge) =>{
    setUserList((prevUsersList) =>{
      return [...prevUsersList,
        {name : uName , age : uAge, id : Math.random().toString()}];
    });
  };

  return (
    <div>
      <AddUser onAddUser={addUserHandler}/>
      <UsersList users={usersList}/>
    </div>
  );
}


export default App;