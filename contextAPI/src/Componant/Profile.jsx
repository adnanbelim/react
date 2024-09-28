import React, {useContext} from 'react';
import UserContext from '../Context/UserContext';

function Profile(){

    {/* Use useContext method to Take data */ }

    const { user } = useContext(UserContext); {/* give const user to take data */ }

    {/* Mantion Condition */}
    
    if (!user) return <h1>Login First</h1>
    return <h1>Welcome {user.username}</h1>
    
}
export default Profile;