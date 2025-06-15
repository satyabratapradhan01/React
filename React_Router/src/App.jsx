import { useState } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Home from './Pages/Home';
import Movie from './Pages/Movie';

function App() {

  const router = createBrowserRouter([

      {
        path: "/",
        element: <Home />
      },
      {
        path: "/about",
        element: <About />
      },
      {
        path: "/movie",
        element: <Movie />
      },
      {
        path: "/contact",
        element: <Contact />
      },
    ])
  

  return (
    <>
    <RouterProvider router={router} />
    </>
  )

}

export default App
