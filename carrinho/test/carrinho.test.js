import Carrinho from "../carrinho.js";
import Item from '../item.js';

describe('Testes do carrinho', () => {
    it('Deve inicializar vazio', () => {
        const carrinho = new Carrinho();
        expect(carrinho.subtotal).toBeNull();
    })

    it('Deve ter itens', () => {
        const item = new Item('Banana', 2, 5);
        const itemTwo = new Item('Maca', 0.5, 1);

        const carinho = new Carrinho();
        carinho.adiciona(item);
        carinho.adiciona(itemTwo);

        expect(typeof carinho).toBe('object')
        expect(carinho.itens[0]).toBe(item);
        expect(carinho.itens[1]).toBe(itemTwo);

        expect(carinho.itens).toContain(item);
        expect(carinho.itens).toContain(itemTwo);
    })

    it('Deve ter a propriedade "total" na inicialização', () => {
        const carrinho = new Carrinho();
        expect(carrinho).toHaveProperty('total')
    })
})