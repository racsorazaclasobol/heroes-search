import { authReducer } from "../../../src/auth/context/authReducer"
import { types } from "../../../src/auth/types/types";

describe('test on AuthReducer', () => { 

    const loginType = types.login;
    const logoutType = types.logout;



    test('should return default state ', () => {
        
        const user = { id:'ABC', name: 'Oscar Alcázar' };
        const action = { type: '', payload: { user }}
        const initialState = { logged: 'Modo Sexo' };

        const state = authReducer(initialState, action );
        expect( state ).toEqual(initialState);

     })

     test('Debe (login) llamar debe llamar el login autenticar y establecer el usuario', () => { 

        const user = { id:'ABC', name: 'Oscar Alcázar' };
        const action = { type: loginType, payload: { user }}
        const initialState = { logged: false };

        const state = authReducer(initialState, action );

        expect( state.logged ).toBeTruthy();

    })

    test('El logout debe borrar el name del usuario y dejar el logged en false ', () => { 
        const user = { id:'ABC', name: 'Oscar Alcázar' };
        const action = { type: logoutType, payload: { user }}
        const initialState = { logged: true };

        const state = authReducer(initialState, action );

        expect( state.logged ).toBeFalsy();
    })


 })