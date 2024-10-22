import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom"
import './App.css'
import Home from "./pages/Home"
import Board from "./pages/Board"

function App() {

  return (
    <>
      <Router>
        
       
        <Routes>
          <Route path="/" element={ <Home />}>
           
          </Route>
          <Route path="/board" element={ <Board /> }>
     
          </Route>
        </Routes>
        </Router>
    </>
  )
}

export default App
