import UserContextProvider from './Context/UserContextProvider';
import Login from './Componant/login';
import Profile from './Componant/profile';

function App() {

  return (
    // UserContextProvider Use here to show bunch of data
    <UserContextProvider>
      <h1>Helllo I am Human</h1>
      <Login /> {/* Login Componant Load*/}

      <Profile /> {/* Profile Componant Load */}
    </UserContextProvider>
  )
}

export default App
