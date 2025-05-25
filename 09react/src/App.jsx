import { useState, version } from 'react'
import NetflixSeries, {Footer, Header} from './components/NetflixSeries';
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

function App() {
  const [count, setCount] = useState(0);
  const img = "https://www.comingsoon.net/wp-content/uploads/sites/3/2024/01/Untitled-design-2024-01-31T102823.476.jpg"
  return (
    <>
    <Header />
    <NetflixSeries />
    <NetflixSeries />
    <NetflixSeries />
    <Footer />
    </>
  )
}

export default App

