import { types } from "../types/types";

// const action = { type: types.login, payload: user }

export const authReducer = ( state = {}, action ) => {

    switch (action.type) {
        case types.login:
            return {
                ...state, //En caso de tener mas configuraciones en el state, barremos su contenido previo y cambiamos los que nos importa ahora.
                logged: true,
                user: action.payload
            };

        case types.logout:
            return {
                logged: false
            };

        default:
            return state;
    }

}