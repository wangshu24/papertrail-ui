import {
  Routes,
  Route,
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Board from "./pages/Board";
import SignIn from "./pages/SignIn";
import { AppProvider } from "./context/AppContext";
import { AuthProvider } from "./context/UserContext";
import { createContext, useState } from "react";
import NavigationBar from "./components/SideBar";

export const NewUserContext = createContext(null);

function RootBrowserProvider() {
  return (
    <Routes>
      <Route path="/" index={true} element={<Home />} />
      <Route path="/signin" element={<SignIn />} />
      <Route path="/board" element={<Board />} />
    </Routes>
  );
}

const router = createBrowserRouter([
  {
    path: "*",
    element: <RootBrowserProvider />,
  },
]);

function App() {
  const [userState, setUserState] = useState({ signedIn: false, user: {} });

  return (
    <AppProvider>
      <AuthProvider>
        <NewUserContext.Provider value={{ userState, setUserState }}>
          {/* <NavigationBar /> */}
          <RouterProvider router={router} />
        </NewUserContext.Provider>
      </AuthProvider>
    </AppProvider>
  );
}

export default App;
