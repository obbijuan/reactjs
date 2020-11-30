import React from 'react'
const { shallow } = require("enzyme")
const { GifGridItem } = require("../../components/GifGridItem")

describe('Pruebas en <GifGridItem>', () => {
    
    const title = "Titulo Ejemplo";
    const url = "https://localhost/test.jpg"
    const wrapper = shallow(<GifGridItem title={title} url={url}/>)

    test('debe de mostrar el componente correctamente', () => {
        expect(wrapper).toMatchSnapshot();
    })

    test('debe de tener un parrafo con el title', () => {
        const p = wrapper.find('p').text().trim()
        expect(p).toBe(title)
    })

    test('debe tener la imagen igual al url y alt de los props', () => {
        const img = wrapper.find('img')
        expect(img.prop('src')).toBe(url)
        expect(img.prop('alt')).toBe(title)
    })
    
    test('debe tener la clase "card".', () => {
        const clase = 'card'
        const div = wrapper.find('div')
        const className = div.prop('className')
        expect(className.includes(clase)).toBe(true);
    })
    
    
    
})
