import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { AuthContext } from "../../src/auth";
import { PrivateRouter } from "../../src/router/PrivateRouter";

describe('tEST on <PrivateRouter />', () => { 
    
    test('should show children if are authenticated', () => { 

        Storage.prototype.setItem = jest.fn();

        const contextValue = { 
            logged: true,
            user: { id:'asd', name: 'Oscar Alcazar' }
        };

        render( 
            <AuthContext.Provider value={ contextValue }>

                <MemoryRouter>
                    <PrivateRouter>
                        <h1>Ruta Privada</h1>    
                    </PrivateRouter>
                </MemoryRouter>

            </AuthContext.Provider>
         )

         expect( screen.getByText('Ruta Privada') ).toBeTruthy();
         expect( localStorage.setItem ).toHaveBeenCalled();

     });


 })