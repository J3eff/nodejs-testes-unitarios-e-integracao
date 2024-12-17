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
    });

    it('Deve ter a propriedade "total" na inicialização', () => {
        const carrinho = new Carrinho();
        expect(carrinho).toHaveProperty('total')
    });

    it('Deve lançar erro ao finalizar compra com carrinho vazio', () => {
        function englobaErroCarrinho() {
            const carrinho = new Carrinho();
            carrinho.finalizaCompra();
        }

        expect(englobaErroCarrinho).toThrowError('Carrinho de compras vazio');
    });

    it('Deve adicionar o frete', () => {
        const carrinho = new Carrinho();
        carrinho.adicionaFrete(10);

        expect(carrinho.frete).toBe(10);
    });

    it('Deve finalizar as compras', () => {
        const item = new Item('Banana', 2, 5);
        const item2 = new Item('Mel', 1, 5);

        const carrinho = new Carrinho();
        carrinho.adiciona(item);
        carrinho.adiciona(item2);
        carrinho.adicionaFrete(10);

        expect(carrinho.finalizaCompra()).toStrictEqual({
            subtotal: 15,
            frete: 10,
            total: 25
        });
    });

});