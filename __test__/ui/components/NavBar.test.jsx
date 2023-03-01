import { fireEvent, render, screen } from "@testing-library/react"
import { MemoryRouter, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../src/auth";
import { NavBar } from "../../../src/ui";

const mockedUseNavigate = jest.fn();

jest.mock('react-router-dom', () => ({ 
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => mockedUseNavigate,
}))

describe(' Tests on <Navbar /> ', () => { 
    
    const contextValue = { 
        logged: true,
        user: {
            id: '123',
            name: 'Invitado'
        },
        logout: jest.fn() //jest.fn() simula ser una funcion
    }

    beforeAll( () => jest.clearAllMocks() );

    test('should show the username on the nabvar', () => { 


        render(
            <MemoryRouter initialEntries={['/']}>
                <AuthContext.Provider value={ contextValue }>
                    <NavBar />
                </AuthContext.Provider>
            </MemoryRouter>
                
        );

        expect( screen.getByText( 'Oscar Alcazar' ) ).toBeTruthy();
        

     })

     test('should show the username on the nabvar', () => { 


        render(
            <MemoryRouter initialEntries={['/']}>
                <AuthContext.Provider value={ contextValue }>
                    <NavBar />
                </AuthContext.Provider>
            </MemoryRouter>
                
        );

        const logoutBtn = screen.getByRole( 'button' );
        fireEvent.click(logoutBtn);

        expect( contextValue.logout ).toHaveBeenCalled();

        expect( mockedUseNavigate ).toHaveBeenCalledWith('/login', {'replace': true});

     })

 })