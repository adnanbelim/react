import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  //useState is hook which change state dynamic
  //first is variable & second is method...
  //we can change variable name...

  let [counter, setCounter] = useState(0); 
  // let counter = 15;

  let addVal = () => {
    if(counter < 11){
      counter = counter + 1;
      setCounter(counter);
      console.log("clicked" + counter);
    }
  }
  let removeval = () => {
    if(counter > 0){
      counter = counter - 1;
      setCounter(counter);
      console.log("clicked" + counter);
    }
  }

  return (
    <>
      <h1>The React Counter Project</h1>
      <h3>Hooks (controle UI dynamically)</h3>
      <h5>Count is : {counter}</h5>
      <button onClick={addVal}>Add 1 in {counter}</button>
      <button onClick={removeval}>Remove 1 from  {counter}</button>
    </>
  )
}

export default App
