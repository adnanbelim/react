import React, { useContext, useEffect } from 'react'
import { useState } from 'react'
import './App.css'
import { ThemeContextProvider } from './context/themeContext';
import Card from './components/Card';
import ThemeBtn from './components/ThemeBtn';

function App() {
  const [themeMode, setThemeMode] = useState('light')
  const dayMode = () => {
    setThemeMode('light')
  }
  const nightMode = () => {
    setThemeMode('dark')
  }
  return (
    <>
      <ThemeContextProvider value={{ dayMode, nightMode, themeMode }}>
        <div className='container'>
          <ThemeBtn />
          <Card />
        </div>
      </ThemeContextProvider>
    </>
  )
}

export default App
