import { createContext, useContext, useReducer } from "react";

export const UserContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, dispatch] = useReducer(userReducer, initUser);

  // const [store] = useState(() => {
  //   createStore((set) => ({
  //     user: initUser,
  //     actions: {},
  //   }));
  // });

  return (
    <UserContext.Provider value={{ user, dispatch }}>
      {children}
    </UserContext.Provider>
  );
}

function userReducer(task, action) {
  switch (action.type) {
    case "SIGNIN":
      let newUserProfile = {
        signedIn: true,
        user: {
          firstName: action.payload.firstName,
          lastName: action.payload.lastName,
        },
      };
      return newUserProfile;
    default:
      newUserProfile = { signedIn: false, user: {} };
  }
}

export function useUserContext() {
  return useContext(UserContext);
}

const initUser = {
  signedIn: false,
  user: {
    firstName: "Placeholder",
    lastName: "Person",
  },
};
