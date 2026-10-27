import { useState, type ChangeEvent } from 'react';
import './App.css'
import Home from './Home'

function App(){
  const [label , setLabel] = useState("")
  const onChange = (e:ChangeEvent<HTMLInputElement>) =>{
    e.preventDefault();
    setLabel(e.target.value)
  }
  return (
    <>
    <input type="text" value={label} onChange={onChange} />
    <Home label={label}/>
    </>
  )
}

export default App;