import { useState } from 'react';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import About from './Pages/About';
import Contact, { ContactData } from './Pages/Contact';
import Home from './Pages/Home';
import Movie from './Pages/Movie';
import AppLayout from './components/layout/AppLayout';
import "./App.css"
import ErrorPage from './Pages/ErrorPage';
import getMoviesData from './api/GetAPIData';
import MovieDetails from './components/UI/MovieDetails';
import GetMoviesDetails from './api/GetMovieDetails';

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout />,
      errorElement: <ErrorPage />,
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
        element: <Movie />,
        loader: getMoviesData,
      },
      {
        path: "/movie/:movieID",
        element: <MovieDetails />,
        loader: GetMoviesDetails,
      },
      {
        path: "/contact",
        element: <Contact />,
        action: ContactData 
      },
      // {
      //   path: "*", 
      //   element: <ErrorPage />
      // }
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
