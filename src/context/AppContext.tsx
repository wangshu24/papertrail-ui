import { createContext, useContext, useReducer } from "react";

const AppContext = createContext(null);
const AppDispatchContext = createContext(null)

export function AppProvider({children} : any) {
    const [app, dispatch] = useReducer(appReducer, initAppContext)

    return(
        <AppContext.Provider value={{app}}>
            <AppDispatchContext.Provider value={dispatch}>
                {children}
            </AppDispatchContext.Provider>
        </AppContext.Provider>
    )
}

function appReducer(task : any, action : any) : UserState{
}

export function useAppContext(){
    return useContext(AppContext)
}

export function useAppDisatchContext(){
    return useContext(AppDispatchContext)
}


const initAppContext = {
    theme: "light",
}