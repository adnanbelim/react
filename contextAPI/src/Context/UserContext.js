import React from 'react';

// UserContext work as Wrap which wrap data
const UserContext = React.createContext();
// Now UserContext is provider which provide data using api context
export default UserContext;


{
    // UseContext Wrap Login and Card and we can give more data. we can easily access data through this
    /* <UserContext>
        <Login />
        <Card></Card>
    </UserContext> */
}