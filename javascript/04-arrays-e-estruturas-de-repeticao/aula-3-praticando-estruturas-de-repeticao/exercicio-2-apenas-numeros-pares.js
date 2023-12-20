/**
 * Exercício 2 - Imprimir apenas números pares 
 * Crie um programa que seja capaz de percorrer uma lista de números e imprima cada número par encontrado
 */

const numeros = [];

//Adicionando números ao array (lista) numeros
numeros.push(2);
numeros.push(5);
numeros.push(7);
numeros.push(8);
numeros.push(9);
numeros.push(4);
numeros.push(12);
numeros.push(37);

console.log(numeros);
/**
 * Condição para que o programa imprima em tela somente os números pares
 * Através do resto da divisão do número por 2 sendo igual a zero 
 * "Se o resto da divisão do número por 2 for igual a zero, o número é par"
 * Sendo par, o programa imprimirá o número
 */ 
for (let i = 0; i < numeros.length; i++) {
    const numero = numeros[i];
    if (numeros[i] % 2 == 0) {
        console.log(numeros[i]);
    }
    
}