import React from "react";
import {Route, Routes} from "react-router-dom"
import { Login } from "../components/Authentication/login/login.js"


export const Routing = () => {
    return(
        <>
            <Routes>
                <Route path="/" element={<Login />} />
            </Routes>
        </>
    )
}