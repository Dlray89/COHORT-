import React from "react";
import { useHistory } from "react-router-dom";
import { Auth0Provider} from '@auth0/auth0-react'

export const AuthProviderWithHistory = ({ children}) => {

    const domain = process.env.REACT_APP_AUTH0_DOMAIN
    const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID

    const history = useHistory()

    const onRedirectCallback = (appstate) => {
        history.push(appstate?.returnTo || window.location.pathname)
    }

    return(
        <Auth0Provider
            domain={domain}
            clientId={clientId}
            onRedirectCallback={onRedirectCallback}
        >
            {children}
        </Auth0Provider>
    )
}