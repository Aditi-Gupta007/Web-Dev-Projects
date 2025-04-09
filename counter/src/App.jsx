import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter, setCounter]=useState(0)
  //let counter = 15
  const addValue=()=>{
    //counter = counter  +1
    if(counter<20){
    setCounter(counter+1)
    }
    else{
      alert("limit reached")
    }
  }
  const SubValue=()=>{
    if(counter>0){
      setCounter(counter-1)
      }
      else{
        alert("limit reached")
      }
  }
  return (
    <>
     <h1>Hello</h1>
     <h2>Counter value:  {counter}</h2>
     <button
     onClick={addValue}
     >Add value </button>
     <br/>
     <button
     onClick={SubValue}
     >Remove value  </button>
    </>
  )
}

export default App
