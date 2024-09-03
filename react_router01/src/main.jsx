import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Layout from './Layout.jsx'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Home from './componant/Home/Home.jsx'
import About from './componant/About/About.jsx'
import Contact from './componant/Contact/Contact.jsx'
import User from './componant/User/User.jsx'

// const router = createBrowserRouter([{
//   path: '',
//   element: <Layout />,
//   children: [
//     {
//       path : '',
//       element : <Home />
//     },
//     {
//       path: 'About',
//       element: <About />
//     },
//     {
//       path: 'Contact',
//       element: <Contact />
//     }
//   ]
// }])

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='' element={<Home />}/>
      <Route path='about' element={<About /> } />
      <Route path='contact' element={<Contact /> } />
      <Route path='user/:value' element={<User />} />
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)
