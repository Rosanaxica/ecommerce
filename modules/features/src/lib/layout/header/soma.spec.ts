import { soma } from './soma'

describe('', () => {

    it('a soma de 1 + 1 deve ser 2', () => {

        const resultado = soma(1, 1);
        expect(resultado).toBe(2)

    })
    it('a soma de 2 + 2 nao deve ser 5', () => {

        const resultado = soma(1, 1);
        expect(resultado).not.toBe(2)
    })

})