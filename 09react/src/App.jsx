import { BioProvider } from "./components/hooks/ContextAip";
import { Home } from "./components/hooks/ContextAip/Home";
import { ParentComponent } from "./components/PropDriling";

function App() {
  return (
    <BioProvider>
      <Home />
    </BioProvider>
  );
}

export default App;
