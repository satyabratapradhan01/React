import { useState, version } from 'react'
import NetflixSeries from './components/NetflixSeries';
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

function App() {
  const [count, setCount] = useState(0);
  return (
    <>
    
    <NetflixSeries />
   
    </>
  )
}

export default App

