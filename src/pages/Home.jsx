import { useNavigate } from "react-router-dom";
import { useAppDisatchContext } from "../contexts/AppContext";
import { UserContext } from "../contexts/UserContext";
import { useContext, useEffect } from "react";
import NavigationBar from "../components/NavigationBar";

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
