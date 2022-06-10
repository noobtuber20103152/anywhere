import logo from './logo.svg';
import './App.css';
import { useState } from "react"

function App() {
  const [input, setinput] = useState("")
  const onchange = (e) => {
    setinput(e.target.value)
    console.log(input)
  }
  return (
    <>
      <input onChange={onchange} value={input} name="" id="" cols="30" rows="2"></input>
      <a href={`https://source.unsplash.com/random/900x700/?${input}`} target="_blank">Submit</a>
    </>
  )
}

export default App;
