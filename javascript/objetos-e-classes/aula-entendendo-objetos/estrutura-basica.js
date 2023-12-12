/**
 * Objeto - coleção dinâmica de chave e valor
 */

const pessoa = {
    nome: 'Vitor J Guerra',
    idade: 25
};

//Acessando a objeto
console.log(pessoa.nome); //Imprime somente o nome
console.log(pessoa.idade); //Imprime somente a idade
console.log(pessoa); //Imprime a estrutura inline

/**
 * Pode-se incrementar ou remover chave e valor
 */

//incrementado
pessoa.altura = 1.69;
console.log(pessoa);

//deletando
delete pessoa.idade;
console.log(pessoa);