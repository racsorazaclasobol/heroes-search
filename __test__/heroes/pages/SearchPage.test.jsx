import { fireEvent, render, screen } from "@testing-library/react"
import { MemoryRouter } from "react-router-dom";
import { SearchPage } from "../../../src/heroes";

const mockedUseNavigate = jest.fn();

jest.mock('react-router-dom', () => ({ 
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => mockedUseNavigate,
}))


describe('Tests on <SearchPage />', () => { 

    beforeAll( () => jest.clearAllMocks() );
    
    test('should show default values correctly ', () => { 

        const { container } = render( 
            <MemoryRouter>
                <SearchPage />
            </MemoryRouter>
         );

         expect( container ).toMatchSnapshot();
        //  screen.debug();

     })

    test('debe de mostrar a Batman y el input debe estar con el valor de Batman, a traves del queryString en la url ', () => { 

        render( 
            <MemoryRouter initialEntries={['/search?q=batman']}>
                <SearchPage />
            </MemoryRouter>
         );

        // screen.debug();

        const inputValue = screen.getByRole( 'textbox' );
        expect( inputValue.value ).toBe( 'batman' );

        const imgValue = screen.getByRole( 'img' );
        expect( imgValue.src ).toContain('/assets/heroes/dc-batman.jpg');

        const divSearch = screen.getByTestId('divSearch');
        expect(divSearch.style.display).toBe('none');

    })

    test('should show an error if not found a hero', () => { 

        render( 
            <MemoryRouter initialEntries={['/search?q=asdasdasdaas']}>
                <SearchPage />
            </MemoryRouter>
         );

         const divSearch = screen.getByTestId('divError');
         expect(divSearch.style.display).toBe('');

    })

    test('should show an error if not found a hero', () => { 

        render( 
            <MemoryRouter initialEntries={['/search']}>
                <SearchPage />
            </MemoryRouter>
         );

         const inputValue = screen.getByRole( 'textbox' );

         fireEvent.change(inputValue, {target: {name: 'searchText', value:'superman'}})

         const form = screen.getByTestId( 'form' );
         fireEvent.submit(form);

         expect( mockedUseNavigate ).toHaveBeenCalledWith('?q=superman')
    
    })

 })