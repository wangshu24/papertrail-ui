import NavigationBar from "./SideBar";

function LayOut({ children }) {
  return (
    <>
      {/* Setup Header component */}
      <NavigationBar />
      {children}
      {/* Footer Component Here */}
    </>
  );
}

export default LayOut;
