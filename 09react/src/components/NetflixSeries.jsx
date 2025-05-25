import seriesData from "../api/seriesData.json";
import { SeriesCard } from "./SeriesCard";

const NetflixSeries = () => {

  // const name = "Queen Of Tears";
  // const rating = "8.2";
  // const sumary = "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corporis reprehenderit eos ut quod nisi, cumque aspernatur vel voluptatum qui, facilis, perspiciatis nesciunt vero. At quos minima consequuntur beatae nostrum a.";

  // const age = 18;

  // let canWatch = "Not Available";
  // if(age >= 18) canWatch = "Watch Now";

  // const returnGenre = () => {
  //   const genre = "RomCom"
  //   return genre;
  // }

  // const canWatch = () => {
  //   if(age >= 18) return "Watch Now";
  //   return "Not Available"
  // }

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
    <ul>
      {seriesData.map((curElem) => {
       return <SeriesCard key= {curElem.id} curElem={curElem} />
      })}
      </ul>
  )
};

  export default NetflixSeries;

// export const Header = () => {
//     return (
//         <p>copyright @satyabratapradhan</p>
//     )
// }

// export const Footer = () => {
//     return (
//         <p>copyright @satyabratapradhan</p>
//     )
// }