/**
 * Crie uma classe para representar pessoas
 * 
 * Para cada pessoa teremos os atributos nome, peso, altura
 * As pessoas devem ter a capacidade de dizer o valor de seu IMC (IMC = peso / (altura * altura))
 * Instancie uma pessoa chamada José que tenha 70kg de peso e 1.75 de altura e peça ao José
 * para dizer o valor de seu IMC
 */
class Pessoa {
    nome;
    peso;
    altura;

    constructor(nome, peso, altura) {
        //Referenciar que este nome é desta classe, este peso é deste classe...
        this.nome = nome;
        this.peso = peso;
        this.altura = altura;
    }

    /**
     * Todas as informações para o cálculo já estão em Pessoa. Coloca entre parenteses
     * quando a informação vem de fora
     */
    calcularImc() {
        return this.peso / (this.altura * this.altura);
    }

    classificarImc() {
        //Já possuo o valor do IMC com o método calcularImc()
        const imc = this.calcularImc(); //imc = valor calculado
        //Realizar as condições:
        if(imc < 18.5) {
            return('Abaixo do peso');
        } else if(imc >= 18.5 && imc < 25) {
            return('Peso normal');
        } else if(imc >= 25 && imc < 30) {
            return('Acima do peso');
        } else if(imc >= 30 && imc < 40) {
            return('Obeso');
        } else {
            return('Obesidade Grave');
        }
    }
}

const jose = new Pessoa('José', 70, 1.75);
console.log(jose);
console.log("Meu IMC é: ",jose.calcularImc(70, 1.75).toFixed(2));
console.log(jose.classificarImc());