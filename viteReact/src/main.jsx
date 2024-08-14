import React from 'react';
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

// create custom function =========>

function MyApp(){
  return (
    <h1>custom App</h1>
  )
}

// run as object ================>

const object = (
  <a href='https://google.com' target='_blank'>Object link</a>
)

// create react element as react have object like type, props, innerHTML
const name =  'addy';
const reactELE = React.createElement(
  'a',
  {href : 'https://google.com', target : '_blank'},
  'click to visit',
  name //evelvet expression
);

createRoot(document.getElementById('root')).render(

  <App />
  






  // custom rendering================================================>

  //<MyApp />
  //MyApp()   Note => It's also render but we dont use for formatting purpose

  // run object =====================>
  // object

  // run react element ======================>
  // reactELE
)
