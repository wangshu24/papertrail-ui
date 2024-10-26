import { useNavigate } from "react-router-dom";
import { UserContext } from "../context/UserContext";
import { useContext, useEffect } from "react";

function Board() {
  const { user } = useContext(UserContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user.signedIn) {
      navigate("/signin");
    }
  }, [user]);

  return <>Board element</>;
}

export default Board;
