// import assert from 'node:assert/strict';

const somaHorasExtras = (salario, valorHorasExtras) => salario + valorHorasExtras;

const calculaDescontos = (salario, descontos) => salario - descontos;

export {
    somaHorasExtras,
    calculaDescontos
};

/*Asserções -> tipo específico de validação, checagem ou verificação
const verifiqueSe = (valor) => {
    const assercoes = {
        ehExatamenteIgualA(esperado) {
            assert.strictEqual(valor, esperado);
        }
    };
    return assercoes;
};

const teste = (titulo, funcaoDeTeste) => {
    try {
        funcaoDeTeste();
        console.log(`${titulo} passou!`);
    } catch (error) {
        console.error(`${titulo} não passou!!!`);
    }
};

teste('somaHorasExtras', () => {
    const esperado = 2500;
    const retornado = somaHorasExtras(2000, 500);

    verifiqueSe(retornado).ehExatamenteIgualA(esperado);
});

teste('calculaDesconto', () => {
    const esperado = 2300;
    const retornado = calculaDescontos(2500, 200);

    verifiqueSe(retornado).ehExatamenteIgualA(esperado);
});*/