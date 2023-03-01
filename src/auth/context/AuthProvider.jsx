import { useReducer } from 'react'
import { AuthContext } from './AuthContext'
import { authReducer } from './authReducer';

import { types } from '../types/types';

const initialState = { };

const init = () => {
  const user = JSON.parse( localStorage.getItem('user') );

  return { 
      logged: !!user, //Se usa la doble negacion !! para que si el usuario existe devuelva un true, pero si no existe un usuario devuelva un false, osea, quedaria logged: true ó false
      user: user 
  } 
}

export const AuthProvider = ({ children }) => {

    const [ authState, dispatch ] = useReducer(authReducer, initialState, init);

    const onLoginUser = ( name = '' ) => {

      const user = { id: 'ABC', name: name}
      
      const action = {
        type: types.login,
        payload: user
      }

      localStorage.setItem('user', JSON.stringify(user));

      dispatch(action);
    }

    const onLogoutUser = () => {
      
      const action = {
        type: types.logout
      };

      localStorage.removeItem('user');

      dispatch(action);

    }

  return (
    <>
        <AuthContext.Provider value={{ 
          ...authState, 
          login: onLoginUser,
          logout: onLogoutUser, }}>
            { children }
        </AuthContext.Provider>
    </>
  )
}
