import React from 'react'
import { useParams } from 'react-router-dom' //it's hook to take params

function User() {
    const {value} = useParams(); // declair as hook and get param in value constant
  return (
    //print constant value give by <User /> element in Layout.jsx...
      <div><h1 className='bg-gray-500 p-8 text-center text-white font-bold'>User : {value}</h1></div>
  )
}

export default User