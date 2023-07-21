
import './App.css';
import { useState } from 'react';
function App() {
  //starte to hold initial value,(counter)
  //to set value for counter state
  const [counter,setCounter]=useState(0)
  //create a function for increment counter
  function incrementCounter(){
    setCounter(counter+1)
  }
  function decrementCounter(){
    if(counter>0){
    setCounter(counter-1)
    
  }}
  function resetCounter(){
    setCounter(0)
  }
  return (

    <div
    style={{
      display:'flex',
      alignItems:'center',
      textAlign:'center',
      justifyContent:'center',
      padding:'10px',
      border:'1px solid gray',
      marginTop:'200px',
      marginBottom:'200px',
      marginLeft:'500px',
      marginRight:'500px'
    
    }}
    className="App">
      <header className="App-header">
       
       <h3>Counter App</h3>
       <h1>{counter}</h1>
      
       <button
        style={{backgroundColor:'red',
        color:'white',
        padding:'4px',
        margin:'5px'
       }}
       onClick={decrementCounter}>Decrement</button>
       <button
       style={{backgroundColor:'black',
       color:'white',
       padding:'4px',
       margin:'5px'
      }}
       onClick={resetCounter}>Reset</button>
       <button
       style={{backgroundColor:'green',
       color:'white',
       padding:'4px',
       margin:'5px'
      }}
        onClick={incrementCounter}>Increment</button>
      </header>
    </div>
  );
  }

export default App;
