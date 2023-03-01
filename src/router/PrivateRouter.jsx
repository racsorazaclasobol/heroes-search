import { useContext } from "react"
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../auth"


export const PrivateRouter = ({ children }) => {

    const { logged } = useContext( AuthContext );
    
    //Esto es para que cuando cerremos sesion recuerde donde estabamos antes de cerrarla
    const { pathname, search } = useLocation();

    const lastPath = pathname + search;
    localStorage.setItem('lastPath', lastPath) //en Loginpage verifico esta info

  return ( logged )
        ? children
        : <Navigate to='/login' />
}
