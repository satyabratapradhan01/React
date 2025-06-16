import { useState } from 'react';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Home from './Pages/Home';
import Movie from './Pages/Movie';
import AppLayout from './components/layout/AppLayout';
import "./App.css"

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout />,
      children: [
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
      ]
    }
    ])

  // const router = createBrowserRouter(
  //   createRoutesFromElements(
  //     <Route>
  //       <Route path='/' element={<Home />} />
  //       <Route path='/about' element={<About />} />
  //       <Route path='/movie' element={<Movie />} />
  //       <Route path='/contact' element={<Contact />} />
  //     </Route>
  //   )
  // )


  return (
    <>
      <RouterProvider router={router} />
    </>
  )

}

export default App
