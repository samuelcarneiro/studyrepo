/**
 * ARRAYS
 */
const alunos = ['João', 'Vitor', 'Marina'];

//console.log(alunos[3]); Informa: Undefined, pois o array não possui a posição 3

/**
 * Adiciona dinamicamente um item ao array alunos depois da última posição atual: Marina
 */
alunos.push('Samuel'); 

/**
 * Adiciona um item ao array alunos na posição informada [4]
 */
alunos[4] = 'Vinicius'; //Outra forma de adicionar:

console.log(alunos[3]); //Mostra o aluno Samuel, pois agora o array alunos tem a posição 3
console.log(alunos); //Mostra o array