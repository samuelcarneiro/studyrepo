// Importando as funções de outro arquivo (na mesma pasta)
const funcoes = require("./01-criando-a-funcao-gets-e-print");

/**
 * console.log(funcoes);
 * As funções que estão vindo do arquivo requerido acima
 * Lembrando que, lá no arquivo foi exportado tais funções
 * Resultado do console.log:
 * { gets: [Function: gets], print: [Function: print] }
 */

console.log(funcoes.gets()); //Retorna 10, que é o valor retornado lá na função gets