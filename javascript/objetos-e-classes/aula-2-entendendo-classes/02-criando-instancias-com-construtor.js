/**
 * CLASSE é a definição do que deve ser aquele objeto.
 * INSTANCIA é uma ocorrência daquele objeto.
 */

//CLASSE
class Pessoa {
    //definir como são pessoas
    nome;
    idade;
    anoNascimento;

    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
        this.anoNascimento = 2023 - idade;
    }

    descrever() {
        console.log(`Meu nome é ${this.nome} e tenho ${this.idade} anos. Nasci em ${this.anoNascimento}.`);
    }
}

//INSTANCIA
const vitor = new Pessoa('Vitor', 26);
//console.log(vitor); saída: Pessoa { nome: undefined, idade: undefined } ERRO


console.log(vitor);

vitor.descrever();
