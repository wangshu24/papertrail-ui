import {
  BrowserRouter as Router,
  Routes,
  Route,
  createBrowserRouter,
  RouterProvider
} from "react-router-dom"
import './App.css'
import Home from "./pages/Home"
import Board from "./pages/Board"
import SignIn from "./pages/SignIn"
import {AppProvider} from "./context/AppContext"
import { UserContext } from "./context/UserContext"

function RootBrowserProvider(){
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

const router = createBrowserRouter([{
  path: '*', element: <RootBrowserProvider/>
}])

function App() {
  return <RouterProvider router={router}/>
}

export default App
