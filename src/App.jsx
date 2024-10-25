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
import { AuthProvider } from "./context/UserContext"

function RootBrowserProvider(){
  return (
    <AppProvider>
      <AuthProvider>  
 
          <Routes>
            <Route path="/" index={true} element={ <Home />} />
            <Route path="/signin" element={<SignIn/>} />      
            <Route path="/board" element={ <Board /> } />
          </Routes>
     
      </AuthProvider>
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
