import { useState } from "react"
import { AuthenticationContext } from "./auth.context"

const tokenStorage = localStorage.getItem("TUPmovies");

export const AuthenticationContextProvider = ({ children }) => {
    const [token, setToken] = useState(tokenStorage);

    const handleUserLogin = (userToken) => {
        localStorage.setItem("TUPmovies", userToken);
        setToken(userToken);
    }

    const handleUserLogout = () => {
        localStorage.removeItem("TUPmovies");
        setToken(null)
    }

    return (
        <AuthenticationContext value={{ token, handleUserLogin, handleUserLogout}}>
            {children}
        </AuthenticationContext>
    )
}