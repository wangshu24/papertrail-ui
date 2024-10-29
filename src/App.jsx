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
import { AppProvider } from "./contexts/AppContext";
import { AuthProvider } from "./contexts/UserContext";

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
  return (
    <AppProvider>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </AppProvider>
  );
}

export default App;
