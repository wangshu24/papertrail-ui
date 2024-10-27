import { useContext, useState } from "react";
import { UserContext } from "../context/UserContext.jsx";
import { NewUserContext } from "../App.jsx";

function SignIn() {
  const { user, dispatch } = useContext(UserContext);
  const [email, changeEmail] = useState("");
  console.log(user);

  const { userState, setUserState } = useContext(NewUserContext);

  return (
    <>
      {userState.signedIn
        ? "Welcome " + userState.user.firstName + " " + userState.user.lastName
        : "You're not signed in yet."}
      <form>
        <label>Email</label>
        <br />
        <input
          type="email"
          name="email"
          placeholder="e.g: john.doe@loop.mail"
          value={email}
          onChange={(event) => changeEmail(event.target.value)}
        />
      </form>
      <button
        onClick={() => {
          dispatch({
            type: "SIGNIN",
            payload: { firstName: "John", lastName: "Doe" },
          });
          setUserState({
            type: "SIGNIN",
            payload: { firstName: "John", lastName: "Doe" },
          });
          changeEmail("");
        }}
      >
        Click to sign in here
      </button>
    </>
  );
}

export default SignIn;
