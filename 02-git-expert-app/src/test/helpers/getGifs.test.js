import { getGifs } from "../../helpers/getGifs"

describe('Pruebas con getGifs Fetch', () => {

    test('debe de traer 10 elementos', async() => {
        const gifs = await getGifs('Matrix');
        expect(gifs.length).toBe(10);
    })

    test('debe evaluar cuando no se consulta un nombre', async() => {
        const gifs = await getGifs('');
        expect(gifs.length).toBe(0);
    })
    
    
})
