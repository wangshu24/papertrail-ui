import { useManageUserContext } from "../context/UserContext"

function SignIn(){  
    const dispatch = useManageUserContext()

    return (
       <>
        Sign in please
        <button>Click to sign in here</button>
       </>
    )
}

export default SignIn