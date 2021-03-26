import { fetchWithoutToken } from '../../helpers/fetch';



describe('Pruebas en el helper Fetch', () => {
    
    let token = '';

    test('fetchSinToken debe de funcionar', async() => {
        
        const resp = await fetchWithoutToken('auth', { email: 'obbijuan@gmail.com', password: '123456' }, 'POST');

        expect( resp instanceof Response ).toBe( true );

        const body = await resp.json();
        expect( body.ok ).toBe( true );

        token = body.token;
        
    })
    

})
