import {
  BrowserRouter as Router,
  Routes,
  Route,

} from "react-router-dom"
import './App.css'
import Home from "./pages/Home"
import Board from "./pages/Board"
import {AppContext} from "./context/AppContext"
 
function App() {

  return (
    
      <Router>
        
       
        <Routes>
          <Route path="/" element={ <Home />}>
           
          </Route>
          <Route path="/board" element={ <Board /> }>
     
          </Route>
        </Routes>
        </Router>

  )
}

export default App
