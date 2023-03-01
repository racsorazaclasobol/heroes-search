import { render, screen } from "@testing-library/react"
import { MemoryRouter } from "react-router-dom";
import { AuthContext } from "../../src/auth";
import { AppRouter } from "../../src/router/AppRouter";

describe('Tests on <AppRouter />', () => { 

    test('should show login if not are authenticated', () => { 
        
        const contextValue = {
            logged: false,
        };


        render(
            <MemoryRouter initialEntries={['/marvel']}>
                <AuthContext.Provider value={contextValue}> 
                    <AppRouter />
                </AuthContext.Provider>
            </MemoryRouter>
        );

        expect( screen.getAllByText('Login').length ).toBeGreaterThan(1);

     })

     test('should show the components of Marvel page if are authenticated', () => { 
        
        const contextValue = {
            logged: true,
            user: { id: '123', name: 'Oscar Alcázar' }
        };

        render(
            <MemoryRouter initialEntries={['/marvel']}>
                <AuthContext.Provider value={ contextValue }>
                    <AppRouter />
                </AuthContext.Provider>
            </MemoryRouter>
        );

        expect( screen.getByText( 'Marvel Comics' ) ).toBeTruthy();
      })

 })