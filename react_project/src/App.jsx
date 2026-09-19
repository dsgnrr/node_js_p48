import { useState } from "react";
import "./App.css";

const App = () => {

  const [counter, setCounter] = useState(0);

  const [numbers, setNumbers] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  const framework = 'React';

  // let counter = 0;
  setInterval(() => {
    if ((Math.floor(Math.random() * 2)) === 0) {
      setNumbers([]);
    } else {
      setNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
    }
  }, 2000)
  const counterIncrement = () => {
    setCounter(counter + 1);
    console.log(counter)
  }

  return (
    <div className="container">
      <h1 className="welcome_title">Welcome to {framework}</h1>
      <button onClick={() => setCounter(counter + 1)} className="button">Click: {counter}</button>
      <ul>
        {numbers.length == 0 ? (<li>No elements</li>) :
          numbers.map((v, i) => (
            <li key={i}>{v}</li>
          ))}
      </ul>
    </div>
  )
}

export default App;