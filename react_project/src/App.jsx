import { useState } from "react";
import "./App.css";

const App = () => {

  const [counter, setCounter] = useState(0);

  const framework = 'React';

  // let counter = 0;

  const counterIncrement=()=>{
    setCounter(counter+1);
    console.log(counter)
  }

  return (
    <div className="container">
      <h1 className="welcome_title">Welcome to {framework}</h1>
      <button onClick={()=>setCounter(counter+1)} className="button">Click: {counter}</button>
    </div>
  )
}

export default App;