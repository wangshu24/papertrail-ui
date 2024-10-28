import { useNavigate } from "react-router-dom";
import { useAppDisatchContext } from "../context/AppContext";
import { UserContext } from "../context/UserContext";
import { useContext, useEffect } from "react";
import NavigationBar from "../components/SideBar";

function Home() {
  const dispatch = useAppDisatchContext();
  const { user } = useContext(UserContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user.signedIn) {
      navigate("/signin");
    }
  }, [user]);

  return (
    <>
      Home element
      <NavigationBar />
      <button
        onClick={() => {
          dispatch({ type: "light" });
        }}
      >
        Click here
      </button>
    </>
  );
}

export default Home;
