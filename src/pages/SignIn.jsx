import { useContext, useState } from "react"
import { UserContext }  from "../context/UserContext.jsx"

function SignIn(){  
    const {user, dispatch} = useContext(UserContext)
    const [email, changeEmail] = useState("")

    return (
       <>
        Sign in please, {user.user.firstName + " " + user.user.lastName}
        <form>
            <label>Email</label><br/>
            <input type="email" name="email" placeholder="e.g: john.doe@loop.mail" value={email} onChange={(event)=> changeEmail(event.target.value)}/>
        </form>
            <button onClick={() => {
                    dispatch({
                        type: "SIGNIN", 
                        user: {firstName: "John", lastName: "Doe"}
                    });
                    changeEmail("")
                }}>
                    Click to sign in here
            </button>
       </>
    )
}

export default SignIn