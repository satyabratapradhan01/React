import { useState, version } from 'react'
import NetflixSeries from './components/NetflixSeries';
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
import { EventHandling } from './components/EventHandling';
import { EventProps } from './components/EventProps';
import { State } from './components/hooks/State';
import { DerivedState } from './components/DericedState';
import { LiftStateUp } from './components/LiftStateUp';
import { ToggleSwitch } from './projects/ToggleSwtich/ToggleSwtich';
import { Todo } from './projects/Todo/Todo';

function App() {
  const [count, setCount] = useState(0);
  return (
    <section className='container'>
    {/* <h1 className='card-heading'>List of Best Nextflix Series</h1>
    <NetflixSeries /> */}
   {/* <EventHandling /> */}
   {/* <EventProps/> */}
   {/* <DerivedState/> */}
   {/* <LiftStateUp/> */}
   <Todo/>
    </section>
  )
}

export default App

