import UserContextProvider from './Context/UserContextProvider';
import Login from './Componant/login';
import Profile from './Componant/profile';
import './App.css';

function App() {
  // UserContextProvider Use here to show bunch of data
  return (
    <div className='layout'>

      <UserContextProvider>
        <h1>Helllo I am Human</h1>
        <Login /> {/* Login Componant Load*/}

        <Profile /> {/* Profile Componant Load */}
      </UserContextProvider>
    </div>
  )
}

export default App
