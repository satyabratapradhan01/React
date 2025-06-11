import { useState, version } from 'react'
import { ContactForm } from './components/hooks/useState/ContactForm';
import { EffectChallenge } from './components/hooks/UseEffect/EffectChallenge';
import { CleanUp } from './components/hooks/UseEffect/CleanUp';
  
function App() {
  
  return (
    <section className='container'>
   <CleanUp />
    </section>
  )
}

export default App

