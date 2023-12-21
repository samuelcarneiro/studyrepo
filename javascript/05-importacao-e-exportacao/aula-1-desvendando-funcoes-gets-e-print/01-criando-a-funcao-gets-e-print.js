/**
 * Funções Gets e Print
 * 
 * Gets: pega o que for digitado (input)
 */

//GETS
function gets() {
    return 10;
}

//PRINT
function print(texto) {
    console.log(texto);    
}

/**
 * O que será exportado deste documento?
 * É necessário que seja informado, como no comando abaixo, criando um objeto.
 * Estamos exportando um objeto que tem as funções GETS e PRINT
 */
module.exports = { gets, print }; //Modo atual de informar

// Modo antigo de informar
// module.exports = {
//    gets: gets,
//    print: print
// }