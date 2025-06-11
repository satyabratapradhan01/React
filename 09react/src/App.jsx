import { useState, version } from 'react'
import { ContactForm } from './components/hooks/useState/ContactForm';
import { EffectChallenge } from './components/hooks/UseEffect/EffectChallenge';
import { CleanUp } from './components/hooks/UseEffect/CleanUp';
import { HowNotToFeatchApi } from './components/hooks/UseEffect/HowNotToFeatchApi';
  
function App() {
  
  return (
    <section className='container'>
   <HowNotToFeatchApi />
    </section>
  )
}

export default App

