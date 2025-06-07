import { useState, version } from 'react'
import NetflixSeries from './components/NetflixSeries';
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
import { EventHandling } from './components/EventHandling';
import { EventProps } from './components/EventProps';
import { State } from './components/hooks/State';
import { DerivedState } from './components/DericedState';
import { ShortCircuit } from './components/ShortCircuit';
import { ToggleSwitch } from './projects/ToggleSwtich/ToggleSwtich';
import { Todo } from './projects/Todo/Todo';
import { Counter } from './components/hooks/useState/Counter';
import { LiftStateUp } from './components/LiftStateUp';
  
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
   {/* <ToggleSwitch/> */}
   {/* <Todo/> */}
   <Counter />
    </section>
  )
}

export default App

