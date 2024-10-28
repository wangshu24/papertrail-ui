import { useNavigate } from "react-router-dom";
import { UserContext } from "../context/UserContext";
import { useContext, useEffect } from "react";
import { NewUserContext } from "../App";
import NavigationBar from "../components/SideBar";

function Board() {
  const { user, dispatch } = useContext(UserContext);
  const navigate = useNavigate();

  const { userState, setUserState } = useContext(NewUserContext);

  useEffect(() => {
    if (!user.signedIn) {
      navigate("/signin");
    }
  }, [user]);

  return (
    <>
      <NavigationBar />
      Board element
      <textarea name="text-area" draggable="true" value=" Text area"></textarea>
    </>
  );
}

export default Board;
