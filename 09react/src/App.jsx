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

  const name = "Queen Of Tears";
  const rating = "8.2";
  const sumary = "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corporis reprehenderit eos ut quod nisi, cumque aspernatur vel voluptatum qui, facilis, perspiciatis nesciunt vero. At quos minima consequuntur beatae nostrum a.";

  const age = 18;

  // let canWatch = "Not Available";
  // if(age >= 18) canWatch = "Watch Now";

  const returnGenre = () => {
    const genre = "RomCom"
    return genre;
  }

  const canWatch = () => {
    if(age >= 18) return "Watch Now";
    return "Not Available"
  }

  // if(age < 18){
  //   return(
  //   <div>
  //       <img src ="https://www.comingsoon.net/wp-content/uploads/sites/3/2024/01/Untitled-design-2024-01-31T102823.476.jpg" alt="img" />
  //       <h2>Name: {name}</h2>
  //       <h3>Rating: {rating}</h3>
  //       <p> Summary : {sumary} </p>
  //       <p>Genre: {returnGenre()} </p>
  //       <button>Not Avalable</button>
  //     </div>
  // )
  // }

  return(
    <div>
        <img src ="https://www.comingsoon.net/wp-content/uploads/sites/3/2024/01/Untitled-design-2024-01-31T102823.476.jpg" alt="img" />
        <h2>Name: {name}</h2>
        <h3>Rating: {rating}</h3>
        <p> Summary : {sumary} </p>
        <p>Genre: {returnGenre()} </p>
        <button>{canWatch()}</button> <br /><br /><br /><br />
      </div>
  )
}