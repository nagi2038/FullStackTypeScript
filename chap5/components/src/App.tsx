import { useState, useEffect, type ChangeEvent } from 'react';
import './App.css'
import Home , {type UserType} from './Home'

function App(){
  const [id , setId] = useState("");
  const [users, setUsers] = useState<UserType[]>();

  useEffect(()=>{
    const idToGet = `https://jsonplaceholder.typicode.com/posts/${id}`;
    fetch(idToGet).then((result)=>{
      result.json().then((users)=>{
        console.log("user updated", users);
        setUsers(Array.isArray(users)?users : [users])
      })
    })
  }, [id,
    // users : adding user as value will trigger infinite loop because of recussrion of value

  ])

  const onChange = (e:ChangeEvent<HTMLInputElement>) =>{
    setId(e.target.value);
  };
  return (
    <>
    id : <input type='text' value={id} onChange={onChange}/>
    <Home users={users}/>

    </>
  )
}

export default App;