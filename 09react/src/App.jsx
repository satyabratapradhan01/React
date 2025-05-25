import { useState, version } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

function App() {
  const [count, setCount] = useState(0);
  const img = "https://www.comingsoon.net/wp-content/uploads/sites/3/2024/01/Untitled-design-2024-01-31T102823.476.jpg"
  return (
    <>
    <NetflixSeries />
    <NetflixSeries />
    <NetflixSeries />
    </>
  )
}

export default App

const NetflixSeries = () => {
  return(
    <div>
        <img src ="https://www.comingsoon.net/wp-content/uploads/sites/3/2024/01/Untitled-design-2024-01-31T102823.476.jpg" alt="img" />
        <h2>Name: Queen Of Tears</h2>
        <h3>Rating:8.2</h3>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
          Corporis reprehenderit eos ut quod nisi, cumque aspernatur vel voluptatum qui, 
          facilis, perspiciatis nesciunt vero. At quos minima consequuntur beatae nostrum a.
        </p>
      </div>
  )
}