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
    //características do carro
    marca;
    cor;
    gastoMedioPorKm;

    constructor(marca, modelo, cor, gastoMedioPorKm) {
        this.marca = marca;
        this.modelo = modelo;
        this.cor = cor;
        this.gastoMedioPorKm = gastoMedioPorKm;
    }

    //Método para Calcular o Gasto do Percurso
    calcularGastoPercurso(distanciaEmKm, precoCombustivel) {
        return (distanciaEmKm * this.gastoMedioPorKm) * precoCombustivel;
    }
}

//Instanciando um novo carro
const uno = new Carro('Fiat', 'Uno', 'branco', 1/12);
//Chamar o método calcularGastoPercurso com o Carro criado acima
const gastoViagem = uno.calcularGastoPercurso(70, 5.0);
console.log(`Custo da viagem com o ${uno.marca} ${uno.modelo} é de R$:`,gastoViagem.toFixed(2));

//Viagem com Palio
const palio = new Carro('Fiat', 'Palio', 'prata', 1/10);
const gastoViagem2 = palio.calcularGastoPercurso(70, 5.0);
console.log(`Custo da viagem com o ${palio.marca} ${palio.modelo} é de R$:`,gastoViagem2.toFixed(2));