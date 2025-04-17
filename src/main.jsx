import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './index.css'

import Navbar from './components/Navbar.jsx';

import App from './App.jsx'
import Blog from './pages/Blog';
import Category from './pages/Category';
import Signin from './pages/Signin';
import About from './pages/About';
import Contact from './pages/Contact';

const router = createBrowserRouter([
  {
      path: "/",
      element: <><Navbar /><App/></>
  },
  {
      path: "/blog",
      element: <><Navbar /><Blog/></>
  },
  {
      path: "/category",
      element: <><Navbar /><Category/></>
  },
  {
    path: "/about",
    element: <><Navbar/><About/></>
  },
  {
    path: "/contact",
    element: <><Navbar/><Contact/></>
  },
  {
    path: "/login",
    element: <><Signin/></>
  },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
