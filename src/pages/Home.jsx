import { useAppDisatchContext } from "../context/AppContext"

function Home(){  
    const dispatch = useAppDisatchContext()

    return (
       <>
        Home element
        <button  onClick={()=> {dispatch({type : "light"})}}>
            Click here
        </button>
       </>
    )
}

export default Home