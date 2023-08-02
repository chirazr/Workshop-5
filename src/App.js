

import { useState } from 'react';
import './App.css';

function App() {
  const [message, setmessage ]=useState("Hello")
  const [test, settest]=useState()
  return (
    <div className="App">
      <div>
    <button onClick={()=>setmessage("hi")}>Show me your name </button>
    <h1>{message}</h1>
    </div>
    <div>
      <input type ='text' onChange={(e)=>settest(e.target.value)}/>
      <h1>{test}</h1>
      <button onClick={()=>setmessage(test)}>OK</button>
      <h1>{message}</h1>
    </div>
      
    </div>
  );
}
/* onclick (1) modifier hello par hi*/
    /* onClick = when you click in button will write a  name*/

export default App;
