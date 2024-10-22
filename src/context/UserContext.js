import { createContext, useContext, useReducer } from "react";

const UserContext = useContext(null)
const ManageUserContext = useContext(null)

export function UserContext({children}){
    const [user, dispatch] = useReducer(userReducer, initUser)

    return(
        <>
            <UserContext.Provider value={{user, dispatch}}>
                <ManageUserContext.Provider value={dispatch}>
                    {children}
                </ManageUserContext.Provider>
            </UserContext.Provider>
        </>
    )
}

function userReducer(task, action){

}

export function useUserContext(){
    return useContext(UserContext)
}

export function useManageUserContext(){
    return useContext(MangerUserContext) 
}

const initUser = {
    firstName: "John",
    lastName: "Doe"
}