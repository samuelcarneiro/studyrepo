/**
 * Crie uma classe para representar carros
 * 
 * Os carros possuem uma marca, uma cor e um gasto médio de combustível por kilometro rodado.
 * Crie um método que dado a quantidade de kilometros e o preço do combustível nos dê o valor
 * gasto em reais para realizar este percurso.
 * 
 * As classes sempre começam com letra maiusculas
 */
class Carro {
    marca;
    cor;
    gastoMedioPorKm;

    constructor(marca, cor, gastoMedioPorKm) {
        this.marca = marca;
        this.cor = cor;
        this.gastoMedioPorKm = gastoMedioPorKm;
    }
}

const uno = new Carro('fiat', 'branco', 1/12);

console.log(uno);