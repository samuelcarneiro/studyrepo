/**
 * ESTRUTURAS DE REPETIÇÃO
 */

const notas = [];

notas.push(5);
notas.push(7);
notas.push(8);
notas.push(2);
notas.push(5);

/**
 * Padrão ter uma variável para executar o for, normalmente é o 'i'
 * i é igual a zero, enquanto 'i' for menor do que o tamanho do array (<array>.lenght) incremente mais 1 no valor de 'i'
 * e parará a execução a segunda sentença for sanada. Nesse caso, quando 'i' for maior do que o tamanho do array
 */
for (let i = 0; i < notas.length; i++) {
    console.log(notas[i]);
}