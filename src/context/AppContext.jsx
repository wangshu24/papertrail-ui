import { createContext, useContext, useReducer } from "react";

const AppContext = createContext(null);
const AppDispatchContext = createContext(null)

export function AppProvider({children} ) {
    const [app, dispatch] = useReducer(appReducer, initAppContext)

    return(
        <AppContext.Provider value={{app}}>
            <AppDispatchContext.Provider value={dispatch}>
                {children}
            </AppDispatchContext.Provider>
        </AppContext.Provider>
    )
}

function appReducer(task , action ){
    switch(action.type){
        case "light":
            console.log('theme light')
            break
        default:
            console.log("theme dark")
    }
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