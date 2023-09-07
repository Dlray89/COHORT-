import React from "react";
import {LoginForm} from './login-form'
import { useAuth0} from '@auth0/auth0-react'

export const Login = () => {
    const { loginWithRedirect} = useAuth0()
    return(

        <div>
           <div>
            <h1>Club Penguin</h1>
           </div>

           <div>
            <button
                className=""
                onClick={() => loginWithRedirect()}
            >Login</button>

            <button className="" onClick={() => loginWithRedirect()}>
                Signup
            </button>
           </div>

        </div>
    )
}
