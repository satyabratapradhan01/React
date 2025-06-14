import { BioProvider } from "./components/hooks/ContextAip";
import { About } from "./components/hooks/ContextAip/About";
import { Home } from "./components/hooks/ContextAip/Home";
import { ParentComponent } from "./components/PropDriling";

function App() {
  return (
    <>
    <BioProvider>
      <Home />    
      <About />
    </BioProvider></>
  );
}

export default App;
