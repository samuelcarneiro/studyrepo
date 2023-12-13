/**
 * Objeto - coleção dinâmica de chave e valor
 */

const pessoa = {
    nome: 'Vitor J Guerra',
    idade: 25,
    descrever: function () {
        //Como estou dentro do objeto, posso usar os valores nome e idade
        //Utilizando 'this' para 'pegar' os valores (no contexto)
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`);
    }
};

//pessoa.descrever();
const atributo = 'idade'; //'nome', 'idade'
console.log(pessoa[atributo]); //Informa o valor de idade||nome