/**
 * CLASSE é a definição do que deve ser aquele objeto.
 * INSTANCIA é uma ocorrência daquele objeto.
 */

//CLASSE
class Pessoa {
    //definir como são pessoas
    nome;
    idade;

    descrever() {
        console.log(`Meu nome é ${this.nome} e tenho ${this.idade} anos.`);
    }
}

//INSTANCIA
const vitor = new Pessoa();
//console.log(vitor); saída: Pessoa { nome: undefined, idade: undefined } ERRO

vitor.nome = 'Vitor J Guerra';
vitor.idade = 25;

const renan = new Pessoa();
renan.nome = 'Renan J Paula';
renan.idade = 18;

console.log(vitor);
console.log(renan);

vitor.descrever();
renan.descrever();