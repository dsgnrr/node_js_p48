import { useState } from "react";
import UserCard from "./components/user/user-card";
import "./App.css";

const App = () => {

  const [counter, setCounter] = useState(0);

  const [numbers, setNumbers] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  const isDisabled = false;
  const users = [
    {
      id: "u1", name: "Ivan",
    },
    {id: "u2", name: "Olga"}
  ]

  const framework = 'React';

  // let counter = 0;
  // setInterval(() => {
  //   if ((Math.floor(Math.random() * 2)) === 0) {
  //     setNumbers([]);
  //   } else {
  //     setNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  //   }
  // }, 2000)
  const counterIncrement = () => {
    setCounter(counter + 1);
    console.log(counter)
  }

  return (
    <div className="container">
      <h1 className="welcome_title">Welcome to {framework}</h1>
      <button disabled={isDisabled} onClick={() => setCounter(counter + 1)} className="button">Click: {counter}</button>
      <ul>
        {numbers.length == 0 ? (<li>No elements</li>) :
          numbers.map((v, i) => (
            <li key={i}>{v}</li>
          ))}
      </ul>

      <ul>
        {
          users.map(u=>(
            <li key={u.id}>{u.name}</li>
          ))
        }
      </ul>
      <UserCard name="Petro" surname={"Ivanov"} age={20} id={"11111"} avatar={"https://i.natgeofe.com/n/548467d8-c5f1-4551-9f58-6817a8d2c45e/NationalGeographic_2572187_16x9.jpg?w=1200"}></UserCard>
    </div>
  )
}

export default App;