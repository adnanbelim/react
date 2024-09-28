import React from 'react';
import UserContext from './UserContext';

const UserContextProvider = ({children}) => {
    const [user, setUser] = React.useState('');
    return (
        // UserContextProvider Use App.jsx to show bunch of data but data rounds UserContext.jsx, Login.jsx, Profile.jsx

        <UserContext.Provider value={{user, setUser}}> {/*Provider is a property || value property have all data which we want provide*/}
            {children}  {/* children wrap all Componant (children is var we can change name0*/} 
        </UserContext.Provider>
    )
}

{
    // UseContext Wrap Login and Card and we can give more data. we can easily access data through this
    /* <UserContext> // It take one property = Provider

        <Login />
        <Card />
        <Profile />
    </UserContext> */
}

export default UserContextProvider;