import { createContext, useContext, useReducer } from "react";

export const UserContext = createContext(null)

export function AuthProvider({children}){
    const [user, dispatch] = useReducer(userReducer, initUser)

    return( 
            <UserContext.Provider value={{user, dispatch}}>
                    {children}
            </UserContext.Provider>
    )
}

function userReducer(user , action ) {
    switch(action.type){
        case "SIGNIN":
            let newUserProfile = {
                signedIn: true,
                user: {
                    firstName: action.user.firstName,
                    lastName: action.user.lastName
                }
            }
            return newUserProfile
        default:
            newUserProfile = {signedIn: false, user: {}}
           
    }
}

export function useUserContext(){
    return useContext(UserContext)
}

const initUser = {
    signedIn: false, 
    user: {
        firstName: 'Placeholder',
        lastName: 'Person'
    }
}