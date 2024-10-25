import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom"
import './App.css'
import Home from "./pages/Home"
import Board from "./pages/Board"
import SignIn from "./pages/SignIn"
import {AppProvider} from "./context/AppContext"
import { UserContext } from "./context/UserContext"
 
function App() {

  return (
    <AppProvider>
      <UserContext>  
        <Router>
          <Routes>
            <Route path="/" element={ <Home />} />
            <Route path="/signin" element={<SignIn/>} />      
            <Route path="/board" element={ <Board /> } />
          </Routes>
        </Router>
      </UserContext>
    </AppProvider>
  )
}

export default App
