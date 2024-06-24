/**
 * Impelementare in questa funzione, che ha due paremtri: un array e una callback,
 * un algorithmo che utilizzando foreach per ogni elemento dell'array parametro
 * chiami la callback specificata come secondo parametro
 */
function foreachIsFunCall (dati, callback) {
  // implementa qui
}

/**
 * implementare una funzione che utilizzando reduce su un array trovi la media
 * dei valori passati come parametro
 */
function reduceIsFunMedia (dati) {
  // implementa qui
}

/**
 * implementare una funzione  che utilizzando map su un array di stringhe
 * ritorni una sola stringa che rappresenti un elenco non numerato in html
 *
 * esempio:
 * dati = ["primo", "secondo", "terzo" ]
 * risultato = "<ul><li>primo</li><li>secondo</li><li>terzo</li></ul>
 *
 * Suggerimento 1: utilizzare map per generare i vari elementi della
 * lista (es: <li>primo</li>) e poi riunire l'array cosí ottentuo con join
 *
 * esempio:
 * const vettore = [ "a", "b", "c" ]
 * console.log(vettore)           // stampa: a,b,c
 * console.log(vettore.join('')   // stampa: abc
 *
 * Suggerimento 2: provate a risolvere il problema usando solo la reduce
 */
function renderingIsFunListe (dati) {
  // implementa qui
}

module.exports = {
  foreachIsFunCall,
  reduceIsFunMedia,
  renderingIsFunListe
}
