import {
  BrowserRouter as Router,
  Routes,
  Route,

} from "react-router-dom"
import './App.css'
import Home from "./pages/Home"
import Board from "./pages/Board"
import {AppProvider} from "./context/AppContext"
 
function App() {

  return (
      <Router>
        <Routes>
          <Route path="/" element={ <Home />} />
          <Route path="/board" element={ <Board /> } />
        </Routes>
      </Router>
  )
}

export default App
