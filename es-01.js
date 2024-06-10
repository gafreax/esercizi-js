/**
 * Installazione: prima di iniziare lanciare il comando npm i
 * Consegna: completare le seguenti funzioni. Per verificare il loro corretto funzionamento lanciare il comando
 * npm run test
 */

/**
 * Questi esercizi servono per capire come utilizzare lo spread operator
 * [https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax]
 */

/**
 * In questa funzione deve restituire un unico array concatenando i dati dei due array passati come parametro
 *
 * esempio:
 *  arr1 = [1,2,3]
 *  arr2 = [4,5,6]
 * la funzione deve tornare [1,2,3,4,5,6]
 *
 * esempio di utilizzo
 *  const risultato = spreadIsFunConcatenareDueArray([1,2,3], [4,5,6] )
 *  console.log(risultato) // 1,2,3,4,5,6
 */
function spreadIsFunConcatenareDueArray (arr1, arr2) {
  // Completa qui

 //return [...arr1, ...arr2];
 
  const combinaArray = [...arr1, ...arr2];
  return combinaArray;
}

/**
 * Questa funzione deve restituire un oggetto aggiunga al parametro il campo data.
 *
 * esempio:
 *  parametro = { prodotto: "orologio", prezzo: 123.32, marca: "seiko" }
 *
 * la funzione deve tornare
 *  { prodotto: "orologio", prezzo: 123.32, marca: "seiko", data: "Tue May 28 2024 15:14:44 GMT+0200 (Central European Summer Time)" }
 *
 * la data si può mettere come stringa fissa copiandola da quella messa qui in descrizione oppure usando la funizone new Date()
 * [https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/Date]
 */
function spreadIsFunAggiungereUnCampo (parametro) {
  // Completa qui
}

/**
 * Questa funzione deve restituire una stringa che è la concatenazione di tutte le stringhe passate come argomenti.
 *
 * Esempio:
 *   spreadIsFunConcatenaStringhe("Ciao", " ", "mondo", "!")
 *   // Restituisce: "Ciao mondo!"
 */
function spreadIsFunConcatenaStringhe (...stringhe) {
  // Completa qui
}

module.exports = {
  spreadIsFunConcatenareDueArray,
  spreadIsFunAggiungereUnCampo,
  spreadIsFunConcatenaStringhe
}
