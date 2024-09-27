import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Layout from './Layout.jsx'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Home from './componant/Home/Home.jsx'
import About from './componant/About/About.jsx'
import Contact from './componant/Contact/Contact.jsx'
import User from './componant/User/User.jsx'
import Github, { loaderAPI } from './componant/Github/Github.jsx'

{/*
  const router = createBrowserRouter([{
  path: '',
  element: <Layout />,
  children: [
    {
      path : '',
      element : <Home />
    },
    {
      path: 'About',
      element: <About />
    },
    {
      path: 'Contact',
      element: <Contact />
    }
  ]
}]) 
*/}

// createBrowserRouter => `createBrowserRouter` is a function from React Router that allows you to create a router instance for a web application using the browser's history API. It enables navigation between different components or pages based on the URL, making it easy to build single-page applications with dynamic routing.

// createRoutesFromElements => `createRoutesFromElements` is a function from React Router that converts a set of React elements (like routes defined in JSX) into a route configuration object. This is useful for managing and organizing routes in your application, allowing for more flexible and dynamic routing setups.

// Routes => all routes (page) are child of <Layout /> in this header and footer same and we have <outlet /> function which contain child (differ pages) now outlet have Home, About, Contact and User

// Link tag vs anchor tag : 

// => Client side navigation : Link enables client-side navigation, which means clicking on a link does not trigger a full page reload. Instead, it updates the URL and renders the new component without reloading the entire page, leading to a faster and smoother user experience.
// => Avoiding Flash of White Screen : Traditional anchor tags can cause a "flash" of a white screen while the new page loads. Link avoids this by dynamically updating the view.
// => Enhanced Performance, Enhance feature : The Link component seamlessly integrates with React Router’s features like route parameters, query strings, and active link styling, making it easier to handle routing logic.

// Navlink tag vs Link

// navlink have built in feature for active page 
/*
 example : 

 import { NavLink } from 'react-router-dom';

  <NavLink to="/about" activeClassName="active">
    About
  </NavLink>

*/
// Link not have this feature but we can set manually 

/*
  example : 
    import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
    const location = useLocation();
    
    return (
        <nav>
            <Link to="/" className={location.pathname === '/' ? 'active' : ''}>
                Home
            </Link>
            <Link to="/about" className={location.pathname === '/about' ? 'active' : ''}>
                About
            </Link>
         </nav>
    );
};

*/
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='' element={<Home />} />
      <Route path='about' element={<About />} />
      <Route path='contact' element={<Contact />} />
      <Route path='user/:value' element={<User />} />
      <Route
      
      loader={loaderAPI}
      
      path='github' element={<Github />} />

    </Route>
  )
)

// Render the RouterProvider component with the router prop

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />  {/* We have RouterProvider, It take one prop "router". Render page on chrome*/}
  </StrictMode>
)
