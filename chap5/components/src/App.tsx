// import { useState, useEffect, type ChangeEvent, useMemo } from 'react';
import './App.css'
// import Home , {type UserType} from './Home'
// import Awaitable from './Awaitable';
import DeferredValue from './DeferredValue';

// async function fetchData(url:string) {
//   const response = await fetch(url);
//   const users = await response.json();
//   return (Array.isArray(users) ? users : [users]) as UserType[];
// }

function App(){
  return(
<DeferredValue />
  )

  // =====================  METHOSD 2 ========================
  // const [id, setId] = useState("");
  // const idToGet = `https://jsonplaceholder.typicode.com/posts/${id}`;
  // const fetchPromise = useMemo(()=> fetchData(idToGet), [idToGet])

  //   const onChange = (e:ChangeEvent<HTMLInputElement>) =>{
  //   setId(e.target.value);
  // };
  // return (
  //   <>
  //   id : <input type='text' value={id} onChange={onChange}/>
  //   <Awaitable fetchPromise={fetchPromise}/>

  //   </>
  // )
  // ================ METHOD 1 ===================
  // const [id , setId] = useState("");
  // const [users, setUsers] = useState<UserType[]>();

  // useEffect(()=>{
  //   const idToGet = `https://jsonplaceholder.typicode.com/posts/${id}`;
  //   fetch(idToGet).then((result)=>{
  //     result.json().then((users)=>{
  //       console.log("user updated", users);
  //       setUsers(Array.isArray(users)?users : [users])
  //     })
  //   })
  // }, [id,
  //   // users : adding user as value will trigger infinite loop because of recussrion of value

  // ])

  // const onChange = (e:ChangeEvent<HTMLInputElement>) =>{
  //   setId(e.target.value);
  // };
  // return (
  //   <>
  //   id : <input type='text' value={id} onChange={onChange}/>
  //   <Home users={users}/>

  //   </>
  // )
}

export default App;