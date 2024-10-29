import { Link } from "react-router-dom";

function NavigationBar() {
  return (
    <>
      <Link to="/">Home</Link>
      <Link to="/signin">Sign In</Link>
      <Link to="/board">Board</Link>
    </>
  );
}

export default NavigationBar;
