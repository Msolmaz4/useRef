import React,{useRef} from 'react'
import './App.css';

function App() {
const inputRef=useRef()

const inputChange=(e)=>{
  inputRef.current.value =e.target.value
}

const submitButton=()=>{
console.log( inputRef.current.value)
}

const clearButton=()=>{
  inputRef.current.value=''
}


  return (
    <div className="App">
      <input onChange={inputChange} ref={inputRef}></input>
      <button onClick={submitButton}>Submit</button>
      <button onClick={clearButton}>Clear</button>
      
    </div>
  );
}

export default App;
