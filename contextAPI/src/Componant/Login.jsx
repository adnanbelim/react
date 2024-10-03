import React, { useState, useContext } from 'react';
import UserContext from '../Context/UserContext'; 
function Login() {
    const [username, setUsername] = useState(''); {/* Create Hook for input */ }
    const [password, setPassword] = useState(''); {/* Create Hook for input */ }

    {/* Use useContext method to send data */ }
    const { setUser } = useContext(UserContext); {/* give same to the const same as method which mantion in UserContextProvider*/ }

    const HandleSubmit = (e) => {
        e.preventDefault(); {/* We dont want our data going through POST or anywhere */ }

        setUser({ username, password });   {/* Use setUser method of useContext */ }

    }
    return (
        <div className='container'>
            <div>login</div>
            <input
                value={username}
                onChange={(e) =>  setUsername(e.target.value) }
                type="text" placeholder='username' />
            <input
                value={password}
                onChange={(e) => setPassword(e.target.value) }
                type="text" placeholder='password' />
            <button onClick={HandleSubmit}>Submit</button>
        </div>
    )
}

export default Login