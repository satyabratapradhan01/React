import { BioProvider } from "./components/hooks/ContextAip";
import { About } from "./components/hooks/ContextAip/About";
import { ThemeProvider, DarkLight } from "./components/hooks/ContextAip/DarkLight";

function App() {
  return (
    <ThemeProvider>
      <DarkLight />
    </ThemeProvider>
  );
}

export default App;
