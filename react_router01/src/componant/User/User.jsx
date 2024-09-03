import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
    const {value} = useParams();
  return (
      <div><h1 className='bg-gray-500 p-8 text-center text-white font-bold'>User : {value}</h1></div>
  )
}

export default User