import Router from "./Router";
import Assets from "./components/assets/Assets";
import { useTheme } from "./context/ThemeProvider";

function App() {
  const { theme } = useTheme();
  return (
    <div className={`${theme} text-foreground bg-background`}>
      <Router />
      <Assets />
    </div>
  );
}

export default App;
