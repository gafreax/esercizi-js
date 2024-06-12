/**
 * Installazione: prima di iniziare lanciare il comando npm i
 * Consegna: completare le seguenti funzioni. Per verificare il loro corretto funzionamento lanciare il comando
 * npm 
 */

/**
 * Questi esercizi servono per capire come utilizzare le callback
 * [https://developer.mozilla.org/en-US/docs/Glossary/Callback_function]
 */


/**
 * Questa funzione filtra un array in base a una condizione definita da una funzione di callback.
 *
 * Esempio:
 *   const numeri = [1, 2, 3, 4, 5];
 *   const numeriPari = callbackIsFunFiltra(numeri, (numero) => numero % 2 === 0);
 */
function callbackIsFunFiltra(array, callback) {
    // Completa qui
}

/**
 * Questa funzione ha un array come parametro e ritorna un array dove i valori dell'array
 * parametro vengono elevati a potenza
 *
 * Esempio
 * const parametro = [ 2, 4, 8 ]
 * const risultato = callbackIsFunMappaPotenza(parametro)
 * // risultato --> [ 4, 16, 64 ]
 */
function callbackIsFunMappaPotenza(parametro) {
  // Completa qui
}


/**
 * Questa funzione deve utilizzare la funzione di callback per stampare a video i dati presenti nell'array
 * esempio:
 * spreadIsFunStampaArray([1,2,3,4,5], (numero) => console.log("n ==> ",  numero))
 * Stampa a video: 
 * n ==> 1
 * n ==> 2
 * n ==> 3
 * n ==> 4
 * n ==> 5
 */
function callbackIsFunStampaArray (array, callback) {
    // Completa qui
}

/**
 * Implementare una funzione che esegue la composizione di due funzioni
 * prende il valore di ritorno della prima funzione e lo passa come argomento alla seconda funzione e poi torna il risultato
 * esempio:
 *  const funOne = (param) => param + 1
 *  const funTwo = (param) => param * 2
 * Risultato dopo la composizione se param vale 5: 12
 */
function callbackIsFunCompose(param, funOne, funTwo) {
// Completa qui
}

module.exports = {
    callbackIsFunFiltra,
    callbackIsFunStampaArray
}
