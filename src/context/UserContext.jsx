import { createContext, useContext, useReducer } from "react";
import {UserState, UserAction} from  "./typeContext"

const UserContext = createContext(null)
const ManageUserContext = createContext(null)

export function UserContext({children}){
    const [user, dispatch] = useReducer(userReducer, initUser)

    return( 
            <UserContext.Provider value={{user, dispatch}}>
                <ManageUserContext.Provider value={dispatch}>
                    {children}
                </ManageUserContext.Provider>
            </UserContext.Provider>
    )
}

function userReducer(user , action ) {

}

export function useUserContext(){
    return useContext(UserContext)
}

export function useManageUserContext(){
    return useContext(ManageUserContext) 
}

const initUser = {
    firstName: "John",
    lastName: "Doe"
}