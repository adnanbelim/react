import { useState, useCallback, useEffect, useRef } from 'react'
import './App.css'

function App() {

  const [length, setLength] = useState(8); //input range default value 
  const [number, setNumber] = useState(false);
  const [specialChar, setSpecialChar] = useState(false);
  const [password, setPassword] = useState('');

  /* Note =============================================================================>
  Syntax => useCallback(setup, dependency)
  useCallback depend on dependency and store data in cache and optimize data whenever we changing on data
  useEffect simply use to when we modify data then it will run automatic based on dependency
  */

  const passGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (number) str += '0123456789';
    if (specialChar) str += "!@#$%^&*()_+-=[]{}|;:',.<>/?`";

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }

    setPassword(pass);

  }, [length, number, specialChar, setPassword])

  // Use of useRef Hook => make a variable and passed it to the refference value (like input) and make onClick method (like button) to take refference value...

  const passRef = useRef(null);

  const copyPassOnClip = useCallback(() => {

    passRef.current?.select();                            //passRef have many attribute (current? check value null or not)
    window.navigator.clipboard.writeText(password);       //this not work on server because we dont have window on server

  }, [password])

  /* Note =============================================================================>

  //passGenerator(); //Too many re-renders (!!react stop). React limits the number of renders to prevent an infinite loop.
  //therefore we need useEffect hook to render multiple time on change...

  //Syntax => useEffect(setup, dependency)  
  */

  useEffect(() => { passGenerator(); }, [length, number, specialChar, passGenerator]);

  return (
    <div className='bg-gray-400 shadow-md p-10 rounded-xl'>
      <h1 className='font-bold pb-5 text-white'>Password Generator</h1>
      <input
        type="text"
        value={password}
        placeholder='password'
        className='max-w-screen-lg rounded-2xl p-2 mx-3 outline-none'
        id='password'
        readOnly
        ref={passRef}
      />

      <button className='text-white font-bold rounded-xl p-3' style={{ backgroundColor: 'blue' }} onClick={copyPassOnClip}>
        copy
      </button>

      <div className='flex justify-center'>
        <input
          type="range"
          min={6}
          max={100}
          value={length}
          className='cursor-pointer'
          onChange={(e) => { setLength(e.target.value) }}
        />
        <span className='text-white font-bold rounded-xl p-3' style={{ backgroundColor: 'light-blue' }} >Length : {length}</span>
      </div>

      <div className='flex justify-center'>
        <input
          type="checkbox"
          defaultChecked={number}
          id="numberInput"
          onChange={() => {
            setNumber((check) => !check)
          }}
        />
        <span className='text-white font-bold rounded-xl p-3' style={{ backgroundColor: 'light-blue' }} >Number</span>

        <input
          type="checkbox"
          defaultChecked={specialChar}
          onChange={() => {
            setSpecialChar((check) => !check)

          }}
        />
        <span className='text-white font-bold rounded-xl p-3' style={{ backgroundColor: 'light-blue' }} >Special Character</span>
      </div>

    </div>

  )
}

export default App
