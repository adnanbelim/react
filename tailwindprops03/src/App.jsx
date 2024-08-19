import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './assets/componant/Card'

function App() {

  return (
    <div className='container-fluid'>
      <h1 className='text-white bg-green-400 p-4 rounded-lg'>Tailwind With React</h1>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
        <Card username='Adnan Belim' btnText='Click Me' />
        <Card username='Jbr' btnText='Visit Me' />
        <Card username='Uzair' />
      </div>
    </div>

  )
}

export default App
