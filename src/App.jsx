import Router from "./Router";
import Assets from "./components/assets/Assets";
import { useTheme } from "./context/ThemeProvider";

function App() {
  
  return (
    <div>
      <Router />
      <Assets />
    </div>
  );
}

export default App;
