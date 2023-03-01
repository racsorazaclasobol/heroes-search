import { types } from "../../../src/auth/types/types"

describe('tests on Types', () => { 
    
    test('should return estos types', () => { 

        expect( types ).toEqual(
            {
                login:  '[Auth] Login',
                logout: '[Auth] Logout',
            }
        );
     })

 })