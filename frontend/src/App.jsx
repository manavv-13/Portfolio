import Home from "./pages/Home"
import ThemeState from "./context/ThemeState";

function App() {
  return (
    <>
    <ThemeState>
    <Home/>
    </ThemeState>
    </>
  )
}

export default App
