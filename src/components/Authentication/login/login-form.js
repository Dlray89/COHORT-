import React from "react";


export const LoginForm = () => {
    return(
        <form className="login-form">
            <div className="login-form__username-field">
                <input className="login-form__username-field--username"
                    name="username"
                    placeholder="Username"
                />
            </div>

            <div className="login-form__password-field">
                <input className="login-form__password-field--password"
                    name="password"
                    placeholder="password"
                />
            </div>

            <div>
                <button>Login</button>
            </div>
        </form>
    )
}