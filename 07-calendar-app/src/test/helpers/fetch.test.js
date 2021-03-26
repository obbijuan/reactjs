import { fetchWithoutToken, fetchWithToken } from '../../helpers/fetch';



describe('Pruebas en el helper Fetch', () => {
    
    let token = '';

    test('fetchSinToken debe de funcionar', async() => {
        
        const resp = await fetchWithoutToken('auth', { email: 'obbijuan@gmail.com', password: '123456' }, 'POST');

        expect( resp instanceof Response ).toBe( true );

        const body = await resp.json();
        expect( body.ok ).toBe( true );

        token = body.token;
        
    })


    test('fetchConToken debe de funcionar', async() => {

        // Valida que se graba el token en el localStorage
        localStorage.setItem('token', token );

        // Valida que se esta usando el fetchWithToken
        const resp = await fetchWithToken('events/5ee25d21c25cce32af01a3f3', {}, 'DELETE');
        const body = await resp.json();

        expect( body.msg ).toBe('Evento no existe con ese Id');

        
    })
    

})
