import { render, screen } from "@testing-library/react"
import { MemoryRouter, Route, Routes } from "react-router-dom";
import { AuthContext } from "../../src/auth"
import { PublicRouter } from "../../src/router/PublicRouter"

describe('tests on <PublicRouter />', () => { 

    test('should show children if not authenticated', () => { 

        const contextValue = { logged: false };

        render( 
            <AuthContext.Provider value={ contextValue }>
                <PublicRouter>
                    <h1>Ruta Publica</h1>    
                </PublicRouter>
            </AuthContext.Provider>
         )

        expect( screen.getByText('Ruta Publica') ).toBeTruthy();

     });

     test('should navegate if are athenticated', () => { 

        const contextValue = { 
            logged: true,
            user: { id: '123', name: 'Oscar Alcázar' }
        };

        render( 
            <AuthContext.Provider value={ contextValue }>
                <MemoryRouter initialEntries={['/login']}>

                    <Routes>
                        <Route path="login" element={ 
                            <PublicRouter>
                                <h1>Ruta Publica</h1>    
                            </PublicRouter>
                         } />
                         <Route path="marvel" element={ <h1>Página Marvel</h1> } />
                    </Routes>

                    
                </MemoryRouter>
            </AuthContext.Provider>
         )

         expect( screen.getByText( 'Página Marvel' ) ).toBeTruthy();
        

     });

 })